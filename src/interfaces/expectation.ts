interface IExpectation<T> {
    /**
     * Asserts that the item exists (is not null undefined)
     */
    toExist(message?: string): this;
    /**
     * Asserts that the item exists (is not null undefined)
     * (Alias for toExist)
     */
    toNotBeNullOrUndefined(message?: string): this;

    /**
     * Asserts that the item does not exist (is null or undefined)
     */
    toNotExist(message?: string): this;
    /**
     * Asserts that the item does not exist (is null or undefined)
     * (Alias for toNotExist)
     */
    toBeNullOrUndefined(message?: string): this;

    /**
     * Asserts that the item is strictly equal to [value]
     */
    toBe(value: T, message?: string): this;

    /**
     * Asserts that the item is not strictly equal to [value]
     */
    toNotBe(value: T, message?: string): this;

    /**
     * Asserts that the item is deep equal to [value]
     */
    toEqual(value: T, message?: string): this;

    /**
     * Asserts that the item is not deep equal to [value]
     */
    toNotEqual(value: T, message?: string): this;

    /**
     * Asserts that the item's type is [constructor]
     */
    toBeA(constructor: string, message?: string): this;
    /**
     * Asserts that the item's type is [constructor]
     * (Alias for toBeA)
     */
    toBeAn(constructor: string, message?: string): this;

    /**
     * Asserts that the item's type is not [constructor]
     */
    toNotBeA(contructor: string, message?: string): this;
    /**
     * Asserts that the item's type is not [constructor]
     * (Alias for toNotBeA)
     */
    toNotBeAn(constructor: string, message?: string): this;

    /**
     * Asserts that the item is null
     * @deprecated since 0.7, use .toNotExist() or .toBe(null) instead
     */
    toBeNull(message?: string): this;

    /**
     * Asserts that the item is not null
     * @deprecated since 0.7, use .toExist() or .toNotBe(null) instead
     */
    toNotBeNull(message?: string): this;
}

export default IExpectation;
