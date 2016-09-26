import IBooleanExpectation from './boolean-expectation';
import INumberExpectation from './number-expectation';
import IStringExpectation from './string-expectation';
import IArrayExpectation from './array-expectation';
import IFunctionExpectation from './function-expectation';
import IObjectExpectation from './object-expectation';
import IExpectation from './expectation';

interface IExpect {
    (item: boolean): IBooleanExpectation;
    (item: number): INumberExpectation;
    (item: string): IStringExpectation;
    <T>(array: T[]): IArrayExpectation<T>;
    <T>(block: Function): IFunctionExpectation;
    <T extends Object>(object: T): IObjectExpectation<T>;
    <T>(item: T): IExpectation<T>;
}

export default IExpect;
