import * as deepEqual from 'deep-equal';

abstract class Expectation<T> {
	protected actual: T;

	public constructor(actual: T) {
		this.actual = actual;
	}

	protected toBe(value: T, message?: string): void {
		if (this.actual !== value) {
			const error = new Error(message || `Expected "${this.actual}" to be "${value}"`);
			error['actual'] = this.actual;
			error['expected'] = value;
			error['showDiff'] = true;

			throw error;
		}
	}

	protected toNotBe(value: T, message?: string): void {
		if (this.actual === value) {
			throw new Error(message || `Expected "${this.actual}" to not be "${value}"`);
		}
	}

	protected toEqual(object: Object, message?: string): void {
		if (!deepEqual(this.actual, object, { strict: true })) {
			const error = new Error(message || 'Expected objects to be equal');
			error['actual'] = this.actual;
			error['expected'] = object;
			error['showDiff'] = true;

			throw error;
		}
	}

	protected toNotEqual(object: Object, message?: string): void {
		if (deepEqual(this.actual, object, { strict: true })) {
			throw new Error(message || 'Expected objects to be not equal');
		}
	}

	protected toExist(message?: string): void {
		if (typeof this.actual === 'undefined') {
			throw new Error(message || `Expected object to exist"`);
		}
	}

	protected toNotExist(message?: string): void {
		if (typeof this.actual !== 'undefined') {
			throw new Error(message || `Expected object to not exist"`);
		}
	}
}

export default Expectation;
