import IExpectation from './expectation';

interface IBooleanExpectation extends IExpectation<boolean> {
    /**
     * Asserts that the item is true
     */
    toBeTrue(message?: string): this;

    /**
     * Asserts that the item is false
     */
    toBeFalse(message?: string): this;
}

export default IBooleanExpectation;
