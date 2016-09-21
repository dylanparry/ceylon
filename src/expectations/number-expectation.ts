import Expectation from '../expectation';

export default class NumberExpectation extends Expectation<number> {
	public constructor(actual: number) {
		super(actual);
	}

	public toBe(value: number, message?: string): void {
		super.toBe(value, message);
	}

	public toNotBe(value: number, message?: string): void {
		super.toNotBe(value, message);
	}

	public toExist(message?: string): void {
		super.toExist(message);
	}

	public toNotExist(message?: string): void {
		super.toNotExist(message);
	}

	public toBeLessThan(value: number, message?: string): void {
		if (this.actual >= value) {
			throw new Error(message || `Expected ${this.actual} to be less than ${value}`);
		}
	}

	public toBeLessThanOrEqualTo(value: number, message?: string): void {
		if (this.actual > value) {
			throw new Error(message || `Expected ${this.actual} to be less than or equal to ${value}`);
		}
	}

	public toBeGreaterThan(value: number, message?: string): void {
		if (this.actual <= value) {
			throw new Error(message || `Expected ${this.actual} to be greater than ${value}`);
		}
	}

	public toBeGreaterThanOrEqualTo(value: number, message?: string): void {
		if (this.actual < value) {
			throw new Error(message || `Expected ${this.actual} to be greater than or equal to ${value}`);
		}
	}
}
