import IExpectation from './expectation';

interface IObjectExpectation<T> extends IExpectation<T> {
	toBeA(constructor: Function, message?: string): this;
	toBeA(constructor: string, message?: string): this;
	toBeAn(constructor: Function, message?: string): this;
	toBeAn(constructor: string, message?: string): this;
	toNotBeA(constructor: Function, message?: string): this;
	toNotBeA(constructor: string, message?: string): this;
	toNotBeAn(constructor: Function, message?: string): this;
	toNotBeAn(constructor: string, message?: string): this;
	toInclude(value: Object, message?: string): this;
	toContain(value: Object, message?: string): this;
	toExclude(value: Object, message?: string): this;
	toNotInclude(value: Object, message?: string): this;
	toNotContain(value: Object, message?: string): this;
	toIncludeKey(key: string, message?: string): this;
	toContainKey(key: string, message?: string): this;
	toIncludeKeys(keys: string[], message?: string): this;
	toContainKeys(keys: string[], message?: string): this;
	toExcludeKey(key: string, message?: string): this;
	toNotIncludeKey(key: string, message?: string): this;
	toNotContainKey(key: string, message?: string): this;
	toExcludeKeys(keys: string[], message?: string): this;
	toNotIncludeKeys(keys: string[], message?: string): this;
	toNotContainKeys(keys: string[], message?: string): this;
}

export default IObjectExpectation;
