import Expectation from '../expectation';

export default class FunctionExpectation extends Expectation<Function> {
	public constructor(actual: Function) {
		super(actual);
	}

	/**
	 * Asserts that the SUT throws an error
	 *
	 * @param [message] The message to output in case of a failed assertion
	 */
	public toThrow(error?: string | Error, message?: string) {
		let functionThrew = false;

		try {
			this.actual();
		}
		catch (e) {
			if (typeof error !== 'undefined') {
				console.log(typeof error);
				switch (typeof error) {
					// If the error is an instance of the error param
					case 'function':
						if (e instanceof <any>error) {
							functionThrew = true;
						}
						break;

					// If the error message matches the error param
					case 'string':
						if (e !== error) {
							functionThrew = true;
						}
						break;
				}
			}
			else {
				functionThrew = true;
			}
		}

		if (!functionThrew) {
			throw new Error(message || 'Expected function to throw an error');
		}
	}

	/**
	 * Asserts that the SUT does not throw an error
	 *
	 * @param [message] The message to output in case of a failed assertion
	 */
	public toNotThrow(message?: string) {
		let functionThrew = false;

		try {
			this.actual();
		}
		catch (e) {
			functionThrew = true;
		}

		if (functionThrew) {
			throw new Error(message || 'Expected function to not throw an error');
		}
	}
}
