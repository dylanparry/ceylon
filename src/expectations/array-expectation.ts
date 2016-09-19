import Expectation from '../expectation';

export default class ArrayExpectation extends Expectation<Array<any>> {
	public constructor(actual: Array<any>) {
		super(actual);
	}

	/**
	 * Assert that the SUT is exactly equal to the expected value (=== comparison)
	 *
	 * @param expected The expected value
	 */
	public toBe(expected: Array<any>): void {
		if (this.actual !== expected) {
			const error = new Error(`Expected "${this.actual}" to be "${expected}"`);
			error['actual'] = this.actual;
			error['expected'] = expected;
			error['showDiff'] = true;

			throw error;
		}
	}
}
