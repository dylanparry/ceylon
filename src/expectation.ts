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

	protected toEqual(expected: Object, message?: string): void {
		if (!deepEqual(this.actual, expected, { strict: true })) {
			const error = new Error(message || 'Expected objects to be equal');
			error['actual'] = this.actual;
			error['expected'] = expected;
			error['showDiff'] = true;

			throw error;
		}
	}

	protected toNotEqual(expected: Object, message?: string): void {
		if (deepEqual(this.actual, expected, { strict: true })) {
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

	protected toThrow(error?: Function | string, message?: string): void {
		let functionThrew = false;

		try {
			if (typeof this.actual === 'function') {
				(this.actual as any)(); // tslint:disable-line
			}
		}
		catch (e) {
			if (typeof error !== 'undefined') {
				// If the error param in an Error type
				if (typeof error === 'function') {
					// If the error is an instance of the error param
					if (e instanceof <Function> error) {
							functionThrew = true;
						}
				}
				// If the error param is a string
				else if (typeof error === 'string') {
					if (e !== error) {
						functionThrew = true;
					}
				}
			}
			else {
				functionThrew = true;
			}
		}

		if (!functionThrew) {
			throw new Error(message || 'Expected function to throw an error');
		}
	}

	protected toNotThrow(message?: string): void {
		let functionThrew = false;

		try {
			if (typeof this.actual === 'function') {
				(this.actual as any)(); // tslint:disable-line
			}
		}
		catch (e) {
			functionThrew = true;
		}

		if (functionThrew) {
			throw new Error(message || 'Expected function to not throw an error');
		}
	}
}

export default Expectation;
