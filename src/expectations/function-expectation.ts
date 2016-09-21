import Expectation from '../expectation';

export default class FunctionExpectation extends Expectation<Function> {
	public constructor(actual: Function) {
		super(actual);
	}

	public toThrow(error?: string, message?: string): FunctionExpectation;
	public toThrow(error?: Function, message?: string): FunctionExpectation;

	public toThrow(error?: Object, message?: string): FunctionExpectation {
		let functionThrew = false;

		try {
			if (typeof this.actual === 'function') {
				this.actual();
			}
		}
		catch (e) {
			if (typeof error !== 'undefined') {
				// If the error param in an Error type
				if (typeof error === 'function') {
					// If the error is an instance of the error param
					if (e instanceof (error as Function)) {
							functionThrew = true;
						}
				}
				// If the error param is a string
				else if (typeof error === 'string') {
					if (e !== error) {
						functionThrew = true;
					}
				}
			}
			else {
				functionThrew = true;
			}
		}

		if (!functionThrew) {
			throw new Error(message || 'Expected function to throw an error');
		}

		return this;
	}

	public toNotThrow(message?: string): FunctionExpectation {
		let functionThrew = false;

		try {
			if (typeof this.actual === 'function') {
				this.actual();
			}
		}
		catch (e) {
			functionThrew = true;
		}

		if (functionThrew) {
			throw new Error(message || 'Expected function to not throw an error');
		}

		return this;
	}
}
