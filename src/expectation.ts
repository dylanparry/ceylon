export default class Expectation<T> {
	private actual: T;

	public constructor(actual: T) {
		this.actual = actual;
	}

	/**
	 * Assert that the SUT is exactly equal to the expected value (=== comparison)
	 *
	 * @param expected The expected value
	 */
	public toBe(expected: T): void {
		if (this.actual !== expected) {
			const error = new Error(`Expected "${this.actual}" to be "${expected}"`);
			error['actual'] = this.actual;
			error['expected'] = expected;
			error['showDiff'] = true;

			throw error;
		}
	}
}
