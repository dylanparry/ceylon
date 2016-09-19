import Expectation from '../expectation';

export default class NumberExpectation extends Expectation<number> {
	public constructor(actual: number) {
		super(actual);
	}
}