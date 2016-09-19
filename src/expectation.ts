abstract class Expectation<T> {
	protected actual: T;

	public constructor(actual: T) {
		this.actual = actual;
	}

	/**
	 * Assert that the SUT is exactly equal to the expected value (=== comparison)
	 *
	 * @param expected The expected value
	 * @param message The message to output in case of a failed assertion
	 */
	public toBe(expected: T, message?: string): void {
		if (this.actual !== expected) {
			const error = new Error(message || `Expected "${this.actual}" to be "${expected}"`);
			error['actual'] = this.actual;
			error['expected'] = expected;
			error['showDiff'] = true;

			throw error;
		}
	}
}

export default Expectation;
