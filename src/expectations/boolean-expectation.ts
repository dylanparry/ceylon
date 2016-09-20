import Expectation from '../expectation';

export default class BooleanExpectation extends Expectation<boolean> {
	public constructor(actual: boolean) {
		super(actual);
	}

	public toBe(value: boolean, message?: string): void {
		super.toBe(value, message);
	}

	public toNotBe(value: boolean, message?: string): void {
		super.toNotBe(value, message);
	}

	public toExist(message?: string): void {
		super.toExist(message);
	}

	public toNotExist(message?: string): void {
		super.toNotExist(message);
	}
}
