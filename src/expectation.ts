abstract class Expectation<T> {
	protected actual: T;

	public constructor(actual: T) {
		this.actual = actual;
	}

	/**
	 * Assert that the SUT is strictly equal to the expected value (=== comparison)
	 *
	 * @param value The expected value
	 * @param [message] The message to output in case of a failed assertion
	 */
	public toBe(value: T, message?: string): void {
		if (this.actual !== value) {
			const error = new Error(message || `Expected "${this.actual}" to be "${value}"`);
			error['actual'] = this.actual;
			error['expected'] = value;
			error['showDiff'] = true;

			throw error;
		}
	}

	/**
	 * Assert that the SUT is not strictly equal to the expected value (!== comparison)
	 *
	 * @param value The value that should not match
	 * @param [message] The message to output in case of a failed assertion
	 */
	public toNotBe(value: T, message?: string): void {
		if (this.actual === value) {
			throw new Error(message || `Expected "${this.actual}" to not be "${value}"`);
		}
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

export default Expectation;
