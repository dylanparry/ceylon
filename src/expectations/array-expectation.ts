import Expectation from '../expectation';

export default class ArrayExpectation extends Expectation<Array<any>> {
	public constructor(actual: Array<any>) {
		super(actual);
	}
}
