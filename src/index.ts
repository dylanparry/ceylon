import IExpect from './interfaces/expect';
import Expectation from './expectation';
import assert from './assert';

const expect: IExpect = <T>(actual: T): Expectation<T> => {
    return new Expectation(actual);
};

/*
 * Export non-default objects here so they are exposed on the API,
 * but kept hidden from the UMD build
 */
export { assert };

export default expect;
