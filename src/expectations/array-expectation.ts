import Expectation from '../expectation';

export default class ArrayExpectation extends Expectation<Object[]> {
	public constructor(actual: Object[]) {
		super(actual);
	}

	public toBe(array: Object[], message?: string): void {
		super.toBe(array, message);
	}

	public toNotBe(array: Object[], message?: string): void {
		super.toNotBe(array, message);
	}

	public toEqual(array: Object[], message?: string): void {
		super.toEqual(array, message);
	}

	public toNotEqual(array: Object[], message?: string): void {
		super.toNotEqual(array, message);
	}

	public toExist(message?: string): void {
		super.toExist(message);
	}

	public toNotExist(message?: string): void {
		super.toNotExist(message);
	}
}
