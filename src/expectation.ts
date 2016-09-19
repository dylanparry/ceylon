export default class Expectation<T> {
	protected actual: T;

	public constructor(actual: T) {
		this.actual = actual;
	}
}
