import IExpectation from './expectation';

interface IFunctionExpectation extends IExpectation<Function> {
	toThrow(error?: string, message?: string): this;
	toThrow(error?: RegExp, message?: string): this;
	toThrow(error?: Function, message?: string): this;

	toNotThrow(message?: string): this;

	toIncludeKey(key: string, message?: string): this;
	toContainKey(key: string, message?: string): this;

	toExcludeKey(key: string, message?: string): this;
	toNotIncludeKey(key: string, message?: string): this;
	toNotContainKey(key: string, message?: string): this;

	toIncludeKeys(keys: string[], message?: string): this;
	toContainKeys(keys: string[], message?: string): this;

	toExcludeKeys(keys: string[], message?: string): this;
	toNotIncludeKeys(keys: string[], message?: string): this;
	toNotContainKeys(keys: string[], message?: string): this;
}

export default IFunctionExpectation;
