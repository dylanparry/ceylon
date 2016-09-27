import IExpectation from './expectation';

interface IFunctionExpectation extends IExpectation<Function> {
    /**
     * Asserts that the function will throw an error. Optional [error] parameter asserts that error.message is set
     */
    toThrow(error?: string, message?: string): this;
    /**
     * Asserts that the function will throw an error where error.message matches the regular expression in [error]
     */
    toThrow(error?: RegExp, message?: string): this;
    /**
     * Asserts that the function will throw an error, which is an instance of the function provided in [error]
     */
    toThrow(error?: Function, message?: string): this;

    /**
     * Asserts that the function will not throw an error
     */
    toNotThrow(message?: string): this;

    /**
     * Asserts that the function includes the [key]
     */
    toIncludeKey(key: string, message?: string): this;
    /**
     * Asserts that the function includes the [key]
     * (Alias for toIncludeKey)
     */
    toContainKey(key: string, message?: string): this;

    /**
     * Asserts that the function does not include the [key]
     */
    toExcludeKey(key: string, message?: string): this;
    /**
     * Asserts that the function does not include the [key]
     * (Alias for toExcludeKey)
     */
    toNotIncludeKey(key: string, message?: string): this;
    /**
     * Asserts that the function does not include the [key]
     * (Alias for toExcludeKey)
     */
    toNotContainKey(key: string, message?: string): this;

    /**
     * Asserts that the function includes all the [keys]
     */
    toIncludeKeys(keys: string[], message?: string): this;
    /**
     * Asserts that the function includes all the [keys]
     * (Alias for toIncludeKeys)
     */
    toContainKeys(keys: string[], message?: string): this;

    /**
     * Asserts that the function does not include any of the [keys]
     */
    toExcludeKeys(keys: string[], message?: string): this;
    /**
     * Asserts that the function does not include any of the [keys]
     * (Alias for toExcludeKeys)
     */
    toNotIncludeKeys(keys: string[], message?: string): this;
    /**
     * Asserts that the function does not include any of the [keys]
     * (Alias for toExcludeKeys)
     */
    toNotContainKeys(keys: string[], message?: string): this;
}

export default IFunctionExpectation;
