import IExpectation from './expectation';

interface IBooleanExpectation extends IExpectation<boolean> {
	toBeTrue(): this;
	toBeFalse(): this;
}

export default IBooleanExpectation;
