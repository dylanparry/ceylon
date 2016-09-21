import Expectation from '../expectation';

export default class ArrayExpectation extends Expectation<Object[]> {
	public constructor(actual: Object[]) {
		super(actual);
	}

	public toBe(array: Object[], message?: string): ArrayExpectation {
		super.toBe(array, message);

		return this;
	}

	public toNotBe(array: Object[], message?: string): ArrayExpectation {
		super.toNotBe(array, message);

		return this;
	}

	public toEqual(array: Object[], message?: string): ArrayExpectation {
		super.toEqual(array, message);

		return this;
	}

	public toNotEqual(array: Object[], message?: string): ArrayExpectation {
		super.toNotEqual(array, message);

		return this;
	}

	public toExist(message?: string): ArrayExpectation {
		super.toExist(message);

		return this;
	}

	public toNotExist(message?: string): ArrayExpectation {
		super.toNotExist(message);

		return this;
	}

	public toBeA(type: string, message?: string): ArrayExpectation {
		super.toBeA(type, message);

		return this;
	}

	public toBeAn(type: string, message?: string): ArrayExpectation {
		super.toBeA(type, message);

		return this;
	}

	public toNotBeA(type: string, message?: string): ArrayExpectation {
		super.toNotBeA(type, message);

		return this;
	}

	public toNotBeAn(type: string, message?: string): ArrayExpectation {
		super.toNotBeA(type, message);

		return this;
	}
}
