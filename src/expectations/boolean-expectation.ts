import Expectation from '../expectation';

export default class BooleanExpectation extends Expectation<boolean> {
	public constructor(actual: boolean) {
		super(actual);
	}
}
