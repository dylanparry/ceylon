import IExpectation from './expectation';

interface IBooleanExpectation extends IExpectation<boolean> {
	toBeTrue(message?: string): this;
	toBeFalse(message?: string): this;
}

export default IBooleanExpectation;
