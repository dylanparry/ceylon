import Expectation from '../expectation';

export default class StringExpectation extends Expectation<string> {
	public constructor(actual: string) {
		super(actual);
	}

	public toBe(value: string, message?: string): void {
		super.toBe(value, message);
	}

	public toNotBe(value: string, message?: string): void {
		super.toNotBe(value, message);
	}

	public toExist(message?: string): void {
		super.toExist(message);
	}

	public toNotExist(message?: string): void {
		super.toNotExist(message);
	}
}
