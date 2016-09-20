import * as deepEqual from 'deep-equal';

import Expectation from '../expectation';

export default class ObjectExpectation extends Expectation<Object> {
	public constructor(actual: Object) {
		super(actual);
	}

	public toBe(object: Object, message?: string): void {
		super.toBe(object, message);
	}

	public toNotBe(object: Object, message?: string): void {
		super.toNotBe(object, message);
	}

	public toEqual(object: Object, message?: string): void {
		super.toEqual(object, message);
	}

	public toNotEqual(object: Object, message?: string): void {
		super.toNotEqual(object, message);
	}

	public toExist(message?: string): void {
		super.toExist(message);
	}

	public toNotExist(message?: string): void {
		super.toNotExist(message);
	}
}
