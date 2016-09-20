import * as deepEqual from 'deep-equal';

import Expectation from '../expectation';

export default class ObjectExpectation extends Expectation<Object> {
	public constructor(actual: Object) {
		super(actual);
	}

	/**
	 * Asserts that the SUT is deeply equal to the expected object
	 *
	 * @param expected The expected object
	 * @param [message] The message to output in case of a failed assertion
	 */
	public toEqual(expected: Object, message?: string): void {
		if (!deepEqual(this.actual, expected, { strict: true })) {
			const error = new Error(message || 'Expected objects to be equal');
			error['actual'] = this.actual;
			error['expected'] = expected;
			error['showDiff'] = true;

			throw error;
		}
	}

	/**
	 * Asserts that the SUT is not deeply equal to the expected object
	 *
	 * @param expected The expected object
	 * @param [message] The message to output in case of a failed assertion
	 */
	public toNotEqual(expected: Object, message?: string): void {
		if (deepEqual(this.actual, expected, { strict: true })) {
			throw new Error(message || 'Expected objects to be not equal');
		}
	}
}
