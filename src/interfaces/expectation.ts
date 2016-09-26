interface IExpectation<T> {
    toExist(message?: string): this;

    toNotExist(message?: string): this;

    toBe(value: T, message?: string): this;

    toNotBe(value: T, message?: string): this;

    toEqual(value: T, message?: string): this;

    toNotEqual(value: T, message?: string): this;

    toBeA(constructor: string, message?: string): this;
    toBeAn(constructor: string, message?: string): this;

    toNotBeA(contructor: string, message?: string): this;
    toNotBeAn(constructor: string, message?: string): this;
}

export default IExpectation;
