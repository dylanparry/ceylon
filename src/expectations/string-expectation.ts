import Expectation from '../expectation';

export default class StringExpectation extends Expectation<string> {
	public constructor(actual: string) {
		super(actual);
	}

	/**
	 * Assert that the SUT is exactly equal to the expected value (=== comparison)
	 *
	 * @param expected The expected value
	 */
	public toBe(expected: string): void {
		if (this.actual !== expected) {
			const error = new Error(`Expected "${this.actual}" to be "${expected}"`);
			error['actual'] = this.actual;
			error['expected'] = expected;
			error['showDiff'] = true;

			throw error;
		}
	}
}
