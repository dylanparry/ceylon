import Expectation from '../expectation';

export default class FunctionExpectation extends Expectation<Function> {
	public constructor(actual: Function) {
		super(actual);
	}

	public toThrow(error?: string | Function, message?: string): void {
		super.toThrow(error, message);
	}

	public toNotThrow(message?: string): void {
		super.toNotThrow(message);
	}
}
