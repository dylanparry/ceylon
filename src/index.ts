import IExpect from './interfaces/expect';
import Expectation from './expectation';
export { default as assert } from './assert';

/**
 * Creates a new expectation, which allows assertions to be made on the item passed into it
 *
 * @template T
 * @param {T} actual
 * @returns {Expectation<T>}
 */
const expect: IExpect = <T>(actual: T): Expectation<T> => {
    return new Expectation(actual);
};

export default expect;
