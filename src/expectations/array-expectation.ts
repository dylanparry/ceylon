import * as deepEqual from 'deep-equal';

import Expectation from '../expectation';

export default class ArrayExpectation extends Expectation<any[]> {
	public constructor(actual: any[]) {
		super(actual);
	}

	public toBe(array: any[], message?: string): void {
		super.toBe(array, message);
	}

	public toNotBe(array: any[], message?: string): void {
		super.toNotBe(array, message);
	}

	public toEqual(array: any[], message?: string): void {
		super.toEqual(array, message);
	}

	public toNotEqual(array: any[], message?: string): void {
		super.toNotEqual(array, message);
	}

	public toExist(message?: string): void {
		super.toExist(message);
	}

	public toNotExist(message?: string): void {
		super.toNotExist(message);
	}
}
