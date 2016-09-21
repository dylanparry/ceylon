import AssertionError from '../assertion-error';
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

	public toBeA(type: Function, message?: string): ArrayExpectation;
	public toBeA(type: string, message?: string): ArrayExpectation;
	public toBeA(type: Object, message?: string): ArrayExpectation {
		if (typeof type === 'string') {
			super.toBeA(type, message);
		}
		else {
			if (!(this.actual instanceof (type as Function))) {
				throw AssertionError({
					message: message || `Expected array to be instance of ${(type as Function).constructor.toString()}`,
				});
			}
		}

		return this;
	}

	public toBeAn(type: Function, message?: string): ArrayExpectation;
	public toBeAn(type: string, message?: string): ArrayExpectation;
	public toBeAn(type: Object, message?: string): ArrayExpectation {
		return this.toBeA(type as any, message); // tslint:disable-line:no-any
	}

	public toNotBeA(type: Function, message?: string): ArrayExpectation;
	public toNotBeA(type: string, message?: string): ArrayExpectation;
	public toNotBeA(type: Object, message?: string): ArrayExpectation {
		if (typeof type === 'string') {
			super.toNotBeA(type, message);
		}
		else {
			if (this.actual instanceof (type as Function)) {
				throw AssertionError({
					message: message || `Expected array to not be instance of ${(type as Function).constructor.toString()}`,
				});
			}
		}

		return this;
	}

	public toNotBeAn(type: Function, message?: string): ArrayExpectation;
	public toNotBeAn(type: string, message?: string): ArrayExpectation;
	public toNotBeAn(type: Object, message?: string): ArrayExpectation {
		return this.toNotBeA(type as any, message); // tslint:disable-line:no-any
	}
}
