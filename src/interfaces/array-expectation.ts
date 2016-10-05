import IExpectation from './expectation';

interface IArrayExpectation<T> extends IExpectation<T[]> {
    /**
     * Asserts that the array includes value
     */
    toInclude(value: T, message?: string): this;
    /**
     * Asserts that the array includes value
     * (Alias for toInclude)
     */
    toContain(value: T, message?: string): this;

    /**
     * Asserts that the array does not include value
     */
    toExclude(value: T, message?: string): this;
    /**
     * Asserts that the array does not include value
     * (Alias for toExclude)
     */
    toNotInclude(value: T, message?: string): this;
    /**
     * Asserts that the array does not include value
     * (Alias for toExclude)
     */
    toNotContain(value: T, message?: string): this;

    /**
     * Asserts that the array includes the key
     */
    toIncludeKey(key: number, message?: string): this;
    /**
     * Asserts that the array includes the key
     * (Alias for toIncludeKey)
     */
    toContainKey(key: number, message?: string): this;

    /**
     * Asserts that the array does not include the key
     */
    toExcludeKey(key: number, message?: string): this;
    /**
     * Asserts that the array does not include the key
     * (Alias for toExcludeKey)
     */
    toNotIncludeKey(key: number, message?: string): this;
    /**
     * Asserts that the array does not include the key
     * (Alias for toExcludeKey)
     */
    toNotContainKey(key: number, message?: string): this;

    /**
     * Asserts that the array includes all the keys
     */
    toIncludeKeys(keys: number[], message?: string): this;
    /**
     * Asserts that the array includes all the keys
     * (Alias for toIncludeKeys)
     */
    toContainKeys(keys: number[], message?: string): this;

    /**
     * Asserts that the array does not include any of the keys
     */
    toExcludeKeys(keys: number[], message?: string): this;
    /**
     * Asserts that the array does not include any of the keys
     * (Alias for toExcludeKeys)
     */
    toNotIncludeKeys(keys: number[], message?: string): this;
    /**
     * Asserts that the array does not include any of the keys
     * (Alias toExcludeKeys)
     */
    toNotContainKeys(keys: number[], message?: string): this;

    /**
     * Asserts that the array has a length of value
     */
    toHaveLength(value: number, message?: string): this;

    /**
     * Asserts that the array does not have a length of value
     * @deprecated since 0.7
     */
    toNotHaveLength(value: number, message?: string): this;

    /**
     * Asserts that the array contains no items
     * @deprecated since 0.7, use toNotExist() or toEqual([]) instead
     */
    toBeEmpty(message?: string): this;

    /**
     * Asserts that the array contains items
     * @deprecated since 0.7, use toExist() or toNotEqual([]) instead
     */
    toNotBeEmpty(message?: string): this;
}

export default IArrayExpectation;
