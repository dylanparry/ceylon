import * as deepEqual from 'deep-equal';

import AssertionError from './assertion-error';

abstract class Expectation<T> {
	protected actual: T;

	public constructor(actual: T) {
		this.actual = actual;
	}

	protected toBe(value: T, message?: string): void {
		if (this.actual !== value) {
			throw AssertionError({
				actual: this.actual,
				expected: value,
				message: message || `Expected "${this.actual}" to be "${value}"`,
				showDiff: true,
			});
		}
	}

	protected toNotBe(value: T, message?: string): void {
		if (this.actual === value) {
			throw AssertionError({
				message: message || `Expected "${this.actual}" to not be "${value}"`,
			});
		}
	}

	protected toEqual(object: Object, message?: string): void {
		if (!deepEqual(this.actual, object, { strict: true })) {
			throw AssertionError({
				actual: this.actual,
				expected: object,
				message: message || 'Expected objects to be equal',
				showDiff: true,
			});
		}
	}

	protected toNotEqual(object: Object, message?: string): void {
		if (deepEqual(this.actual, object, { strict: true })) {
			throw AssertionError({
				message: message || 'Expected objects to be not equal',
			});
		}
	}

	protected toExist(message?: string): void {
		if (typeof this.actual === 'undefined') {
			throw AssertionError({
				message: message || 'Expected object to exist',
			});
		}
	}

	protected toNotExist(message?: string): void {
		if (typeof this.actual !== 'undefined') {
			throw AssertionError({
				message: message || 'Expected object to not exist',
			});
		}
	}
}

export default Expectation;
