import IExpectation from './expectation';

interface INumberExpectation extends IExpectation<number> {
    /**
     * Asserts that the number is less than [value]
     */
    toBeLessThan(value: number, message?: string): this;
    /**
     * Asserts that the number is less than [value]
     * (Alias for toBeLessThan)
     */
    toBeFewerThan(value: number, message?: string): this;

    /**
     * Asserts that the number is less than or equal to [value]
     */
    toBeLessThanOrEqualTo(value: number, message?: string): this;
    /**
     * Asserts that the number is less than or equal to [value]
     * (Alias for toBeLessThanOrEqualTo)
     */
    toBeFewerThanOrEqualTo(value: number, message?: string): this;

    /**
     * Asserts that the number is greater than [value]
     */
    toBeGreaterThan(value: number, message?: string): this;
    /**
     * Asserts that the number is greater than [value]
     * (Alias for toBeGreaterThan)
     */
    toBeMoreThan(value: number, message?: string): this;

    /**
     * Asserts that the number is greater than or equal to [value]
     */
    toBeGreaterThanOrEqualTo(value: number, message?: string): this;
    /**
     * Asserts that the number is greater than or equal to [value]
     * (Alias for toBeGreaterThanOrEqualTo)
     */
    toBeMoreThanOrEqualTo(value: number, message?: string): this;
}

export default INumberExpectation;
