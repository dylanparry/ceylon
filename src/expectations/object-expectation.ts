import AssertionError from '../assertion-error';
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

	public toBeA(type: Function, message?: string): ObjectExpectation;
	public toBeA(type: string, message?: string): ObjectExpectation;
	public toBeA(type: Object, message?: string): ObjectExpectation {
		if (typeof type === 'string') {
			super.toBeA(type, message);
		}
		else {
			if (!(this.actual instanceof (type as Function))) {
				throw AssertionError({
					message: message || `Expected object to be instance of ${(type as Function).constructor.toString()}`,
				});
			}
		}

		return this;
	}

	public toBeAn(type: Function, message?: string): ObjectExpectation;
	public toBeAn(type: string, message?: string): ObjectExpectation;
	public toBeAn(type: Object, message?: string): ObjectExpectation {
		return this.toBeA(type as any, message); // tslint:disable-line:no-any
	}

	public toNotBeA(type: Function, message?: string): ObjectExpectation;
	public toNotBeA(type: string, message?: string): ObjectExpectation;
	public toNotBeA(type: Object, message?: string): ObjectExpectation {
		if (typeof type === 'string') {
			super.toNotBeA(type, message);
		}
		else {
			if (this.actual instanceof (type as Function)) {
				throw AssertionError({
					message: message || `Expected object to not be instance of ${(type as Function).constructor.toString()}`,
				});
			}
		}

		return this;
	}

	public toNotBeAn(type: Function, message?: string): ObjectExpectation;
	public toNotBeAn(type: string, message?: string): ObjectExpectation;
	public toNotBeAn(type: Object, message?: string): ObjectExpectation {
		return this.toNotBeA(type as any, message); // tslint:disable-line:no-any
	}
}
