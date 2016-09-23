interface IExpectation<T> {
	toExist(message?: string): this;

	toNotExist(message?: string): this;

	toBe(value: T, message?: string): this;

	toNotBe(value: T, message?: string): this;

	toEqual(value: T, message?: string): this;

	toNotEqual(value: T, message?: string): this;
}

export default IExpectation;
