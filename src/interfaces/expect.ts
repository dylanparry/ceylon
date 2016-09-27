import IBooleanExpectation from './boolean-expectation';
import INumberExpectation from './number-expectation';
import IStringExpectation from './string-expectation';
import IArrayExpectation from './array-expectation';
import IFunctionExpectation from './function-expectation';
import IObjectExpectation from './object-expectation';
import IExpectation from './expectation';

interface IExpect {
    /**
     * Creates a boolean expectation
     */
    (item: boolean): IBooleanExpectation;
    /**
     * Creates a number expectation
     */
    (item: number): INumberExpectation;
    /**
     * Creates a string expectation
     */
    (item: string): IStringExpectation;
    /**
     * Creates an array expectation
     */
    <T>(array: T[]): IArrayExpectation<T>;
    /**
     * Creates a function expectation
     */
    <T>(block: Function): IFunctionExpectation;
    /**
     * Creates an object expectation
     */
    <T extends Object>(object: T): IObjectExpectation<T>;
    /**
     * Creates a generic expectation
     */
    <T>(item: T): IExpectation<T>;
}

export default IExpect;
