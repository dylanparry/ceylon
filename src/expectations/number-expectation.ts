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
}