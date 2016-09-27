import IExpect from './interfaces/expect';
import Expectation from './expectation';
export { default as assert } from './assert';

const expect: IExpect = <T>(actual: T): Expectation<T> => {
    return new Expectation(actual);
};

export default expect;
