import Expectation from '../expectation';

export default class BooleanExpectation extends Expectation<boolean> {
	public constructor(actual: boolean) {
		super(actual);
	}

	public toBe(value: boolean, message?: string): BooleanExpectation {
		super.toBe(value, message);

		return this;
	}

	public toNotBe(value: boolean, message?: string): BooleanExpectation {
		super.toNotBe(value, message);

		return this;
	}

	public toExist(message?: string): BooleanExpectation {
		super.toExist(message);

		return this;
	}

	public toNotExist(message?: string): BooleanExpectation {
		super.toNotExist(message);

		return this;
	}
}
