import IExpectation from './expectation';

interface IObjectExpectation<T> extends IExpectation<T> {
    /**
     * Asserts that the object is an instance of [constructor]
     */
    toBeA(constructor: Function, message?: string): this;
    /**
     * Asserts that the object's type is [contructor]
     */
    toBeA(constructor: string, message?: string): this;
    /**
     * Asserts that the object is an instance of [constructor]
     * (Alias for toBeA)
     */
    toBeAn(constructor: Function, message?: string): this;
    /**
     * Asserts that the object's type is [constructor]
     * (Alias for toBeA)
     */
    toBeAn(constructor: string, message?: string): this;

    /**
     * Asserts that the object is not an instance of [constructor]
     */
    toNotBeA(constructor: Function, message?: string): this;
    /**
     * Asserts that the object's type is not [constructor]
     */
    toNotBeA(constructor: string, message?: string): this;
    /**
     * Asserts that the object is not an instance of [constructor]
     * (Alias for toNotBeA)
     */
    toNotBeAn(constructor: Function, message?: string): this;
    /**
     * Asserts that the object's type is not [constructor]
     * (Alias for toNotBeA)
     */
    toNotBeAn(constructor: string, message?: string): this;

    /**
     * Asserts that the object includes [value]
     */
    toInclude(value: Object, message?: string): this;
    /**
     * Asserts that the object includes [value]
     * (Alias for toInclude)
     */
    toContain(value: Object, message?: string): this;

    /**
     * Asserts that the object does not include [value]
     */
    toExclude(value: Object, message?: string): this;
    /**
     * Asserts that the object does not include [value]
     * (Alias for toExclude)
     */
    toNotInclude(value: Object, message?: string): this;
    /**
     * Asserts that the object does not include [value]
     * (Alias for toExclude)
     */
    toNotContain(value: Object, message?: string): this;

    /**
     * Asserts that the object includes the [key]
     */
    toIncludeKey(key: string, message?: string): this;
    /**
     * Asserts that the object includesthe  [key]
     * (Alias for toIncludeKey)
     */
    toContainKey(key: string, message?: string): this;

    /**
     * Asserts that the object does not include the [key]
     */
    toExcludeKey(key: string, message?: string): this;
    /**
     * Asserts that the object does not include the [key]
     * (Alias for toExcludeKey)
     */
    toNotIncludeKey(key: string, message?: string): this;
    /**
     * Asserts that the object does not include the [key]
     * (Alias for toExcludeKey)
     */
    toNotContainKey(key: string, message?: string): this;

    /**
     * Asserts that the object includes all the [keys]
     */
    toIncludeKeys(keys: string[], message?: string): this;
    /**
     * Asserts that the object includes all the [keys]
     * (Alias for toIncludeKeys)
     */
    toContainKeys(keys: string[], message?: string): this;

    /**
     * Asserts that the object does not include any of the [keys]
     */
    toExcludeKeys(keys: string[], message?: string): this;
    /**
     * Asserts that the object does not include any of the [keys]
     * (Alias for toExcludeKeys)
     */
    toNotIncludeKeys(keys: string[], message?: string): this;
    /**
     * Asserts that the object does not include any of the [keys]
     * (Alias )
     */
    toNotContainKeys(keys: string[], message?: string): this;
}

export default IObjectExpectation;
