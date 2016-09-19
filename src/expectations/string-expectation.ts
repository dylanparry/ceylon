import Expectation from '../expectation';

export default class StringExpectation extends Expectation<string> {
	public constructor(actual: string) {
		super(actual);
	}
}
