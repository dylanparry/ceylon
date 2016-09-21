import Expectation from '../expectation';

export default class ObjectExpectation extends Expectation<Object> {
	public constructor(actual: Object) {
		super(actual);
	}

	public toBe(object: Object, message?: string): ObjectExpectation {
		super.toBe(object, message);

		return this;
	}

	public toNotBe(object: Object, message?: string): ObjectExpectation {
		super.toNotBe(object, message);

		return this;
	}

	public toEqual(object: Object, message?: string): ObjectExpectation {
		super.toEqual(object, message);

		return this;
	}

	public toNotEqual(object: Object, message?: string): ObjectExpectation {
		super.toNotEqual(object, message);

		return this;
	}

	public toExist(message?: string): ObjectExpectation {
		super.toExist(message);

		return this;
	}

	public toNotExist(message?: string): ObjectExpectation {
		super.toNotExist(message);

		return this;
	}
}
