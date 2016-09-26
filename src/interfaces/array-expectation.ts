import IExpectation from './expectation';

interface IArrayExpectation<T> extends IExpectation<T[]> {
    toInclude(value: T, message?: string): this;
    toContain(value: T, message?: string): this;

    toExclude(value: T, message?: string): this;
    toNotInclude(value: T, message?: string): this;
    toNotContain(value: T, message?: string): this;

    toIncludeKey(key: number, message?: string): this;
    toContainKey(key: number, message?: string): this;

    toExcludeKey(key: number, message?: string): this;
    toNotIncludeKey(key: number, message?: string): this;
    toNotContainKey(key: number, message?: string): this;

    toIncludeKeys(keys: number[], message?: string): this;
    toContainKeys(keys: number[], message?: string): this;

    toExcludeKeys(keys: number[], message?: string): this;
    toNotIncludeKeys(keys: number[], message?: string): this;
    toNotContainKeys(keys: number[], message?: string): this;

    toHaveLength(value: number, message?: string): this;
    toNotHaveLength(value: number, message?: string): this;
}

export default IArrayExpectation;
