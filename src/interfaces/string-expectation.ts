import IExpectation from './expectation';

interface IStringExpectation extends IExpectation<string> {
    /**
     * Asserts that the string matches the regular expression in [pattern]
     */
    toMatch(pattern: RegExp, message?: string): this;

    /**
     * Asserts that the string does not match the regular expression is [pattern]
     */
    toNotMatch(pattern: RegExp, message?: string): this;

    /**
     * Asserts that the string includes [value]
     */
    toInclude(value: string, message?: string): this;
    /**
     * Asserts that the string includes [value]
     * (Alias for toInclude)
     */
    toContain(value: string, message?: string): this;

    /**
     * Asserts that the string does not include [value]
     */
    toExclude(value: string, message?: string): this;
    /**
     * Asserts that the string does not include [value]
     * (Alias for toExclude)
     */
    toNotInclude(value: string, message?: string): this;
    /**
     * Asserts that the string does not include [value]
     * (Alias for toExclude)
     */
    toNotContain(value: string, message?: string): this;

    /**
     * Asserts that the string has length of [value]
     */
    toHaveLength(value: number, message?: string): this;
}

export default IStringExpectation;
