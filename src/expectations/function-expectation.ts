import Expectation from '../expectation';

export default class FunctionExpectation extends Expectation<Function> {
	public constructor(actual: Function) {
		super(actual);
	}
}
