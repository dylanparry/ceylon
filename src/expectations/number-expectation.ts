import Expectation from '../expectation';

export default class NumberExpectation extends Expectation<number> {
	public constructor(actual: number) {
		super(actual);
	}

	public toBe(value: number, message?: string): NumberExpectation {
		super.toBe(value, message);

		return this;
	}

	public toNotBe(value: number, message?: string): NumberExpectation {
		super.toNotBe(value, message);

		return this;
	}

	public toExist(message?: string): NumberExpectation {
		super.toExist(message);

		return this;
	}

	public toNotExist(message?: string): NumberExpectation {
		super.toNotExist(message);

		return this;
	}

	public toBeLessThan(value: number, message?: string): NumberExpectation {
		if (this.actual >= value) {
			throw new Error(message || `Expected ${this.actual} to be less than ${value}`);
		}

		return this;
	}

	public toBeLessThanOrEqualTo(value: number, message?: string): NumberExpectation {
		if (this.actual > value) {
			throw new Error(message || `Expected ${this.actual} to be less than or equal to ${value}`);
		}

		return this;
	}

	public toBeGreaterThan(value: number, message?: string): NumberExpectation {
		if (this.actual <= value) {
			throw new Error(message || `Expected ${this.actual} to be greater than ${value}`);
		}

		return this;
	}

	public toBeGreaterThanOrEqualTo(value: number, message?: string): NumberExpectation {
		if (this.actual < value) {
			throw new Error(message || `Expected ${this.actual} to be greater than or equal to ${value}`);
		}

		return this;
	}
}
