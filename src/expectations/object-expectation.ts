import Expectation from '../expectation';

export default class ObjectExpectation extends Expectation<Object> {
	public constructor(actual: Object) {
		super(actual);
	}

	/**
	 * Assert that the SUT is not undefined
	 *
	 * @param [message] The message to output in case of a failed assertion
	 *
	 */
	public toExist(message?: string) {
		if (typeof this.actual === 'undefined') {
			throw new Error(message || `Expected object to exist"`);
		}
	}

	/**
	 * Assert that the SUT is undefined
	 *
	 * @param [message] The message to output in case of a failed assertion
	 *
	 */
	public toNotExist(message?: string) {
		if (typeof this.actual !== 'undefined') {
			throw new Error(message || `Expected object to not exist"`);
		}
	}
}
