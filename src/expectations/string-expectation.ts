import Expectation from '../expectation';

export default class StringExpectation extends Expectation<string> {
	public constructor(actual: string) {
		super(actual);
	}

	public toBe(value: string, message?: string): StringExpectation {
		super.toBe(value, message);

		return this;
	}

	public toNotBe(value: string, message?: string): StringExpectation {
		super.toNotBe(value, message);

		return this;
	}

	public toExist(message?: string): StringExpectation {
		super.toExist(message);

		return this;
	}

	public toNotExist(message?: string): StringExpectation {
		super.toNotExist(message);

		return this;
	}
}
