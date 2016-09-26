import IExpect from './interfaces/expect';
import Expectation from './expectation';
import assert from './assert';

const expect: IExpect = <T>(actual: T): Expectation<T> => {
	return new Expectation(actual);
};

export {
	expect as default,
	assert,
};
