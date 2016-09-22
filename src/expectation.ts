import IExpectation from './interfaces/expectation';
import IBooleanExpectation from './interfaces/boolean-expectation';
import INumberExpectation from './interfaces/number-expectation';
import IStringExpectation from './interfaces/string-expectation';
import IArrayExpectation from './interfaces/array-expectation';
import IFunctionExpectatation from './interfaces/function-expectation';
import IObjectExpectation from './interfaces/object-expectation';

export default class Expectation<T> implements IExpectation<T>, IBooleanExpectation, INumberExpectation, IStringExpectation, IFunctionExpectatation, IArrayExpectation<T>, IObjectExpectation<T> {
	private actual: T;

	public constructor(actual: T) {
		this.actual = actual;
	}

	public toExist(message?: string): this {
		throw new Error('Not implemented');
	}

	public toNotExist(message?: string): this {
		throw new Error('Not implemented');
	}

	public toBe(value: boolean, message?: string): this;
	public toBe(value: number, message?: string): this;
	public toBe(value: string, message?: string): this;
	public toBe(value: Function, message?: string): this;
	public toBe(value: T[], message?: string): this;
	public toBe(value: T, message?: string): this;
	public toBe(value: any, message?: string): this {
		throw new Error('Not implemented');
	}

	public toNotBe(value: boolean, message?: string): this;
	public toNotBe(value: number, message?: string): this;
	public toNotBe(value: string, message?: string): this;
	public toNotBe(value: Function, message?: string): this;
	public toNotBe(value: T[], message?: string): this;
	public toNotBe(value: T, message?: string): this;
	public toNotBe(value: any, message?: string): this {
		throw new Error('Not implemented');
	}

	public toEqual(value: boolean, message?: string): this;
	public toEqual(value: number, message?: string): this;
	public toEqual(value: string, message?: string): this;
	public toEqual(value: Function, message?: string): this;
	public toEqual(value: T[], message?: string): this;
	public toEqual(value: T, message?: string): this;
	public toEqual(value: any, message?: string): this {
		throw new Error('Not implemented');
	}

	public toNotEqual(value: boolean, message?: string): this;
	public toNotEqual(value: number, message?: string): this;
	public toNotEqual(value: string, message?: string): this;
	public toNotEqual(value: Function, message?: string): this;
	public toNotEqual(value: T[], message?: string): this;
	public toNotEqual(value: T, message?: string): this;
	public toNotEqual(value: any, message?: string): this {
		throw new Error('Not implemented');
	}

	public toBeTrue(): this {
		throw new Error('Not implemented');
	}

	public toBeFalse(): this {
		throw new Error('Not implemented');
	}

	public toBeLessThan(value: number, message?: string): this {
		throw new Error('Not implemented');
	}

	public toBeFewerThan(value: number, message?: string): this {
		return this.toBeLessThan(value, message);
	}

	public toBeLessThanOrEqualTo(value: number, message?: string): this {
		throw new Error('Not implemented');
	}

	public toBeFewerThanOrEqualTo(value: number, message?: string): this {
		return this.toBeLessThanOrEqualTo(value, message);
	}

	public toBeGreaterThan(value: number, message?: string): this {
		throw new Error('Not implemented');
	}

	public toBeMoreThan(value: number, message?: string): this {
		return this.toBeGreaterThan(value, message);
	}

	public toBeGreaterThanOrEqualTo(value: number, message?: string): this {
		throw new Error('Not implemented');
	}

	public toBeMoreThanOrEqualTo(value: number, message?: string): this {
		return this.toBeGreaterThanOrEqualTo(value, message);
	}

	public toMatch(value: RegExp, message?: string): this {
		throw new Error('Not implemented');
	}

	public toNotMatch(value: RegExp, message?: string): this {
		throw new Error('Not implemented');
	}

	public toInclude(value: string, message?: string): this;
	public toInclude(value: T, message?: string): this;
	public toInclude(value: any, message?: string): this {
		throw new Error('Not implemented');
	}

	public toContain(value: string, message?: string): this;
	public toContain(value: T, message?: string): this;
	public toContain(value: any, message?: string): this {
		return this.toInclude(value, message);
	}

	public toExclude(value: string, message?: string): this;
	public toExclude(value: T, message?: string): this;
	public toExclude(value: any, message?: string): this {
		throw new Error('Not implemented');
	}

	public toNotInclude(value: string, message?: string): this;
	public toNotInclude(value: T, message?: string): this;
	public toNotInclude(value: any, message?: string): this {
		return this.toExclude(value, message);
	}

	public toNotContain(value: string, message?: string): this;
	public toNotContain(value: T, message?: string): this;
	public toNotContain(value: any, message?: string): this {
		return this.toExclude(value, message);
	}

	public toThrow(error?: string, message?: string): this;
	public toThrow(error?: RegExp, message?: string): this;
	public toThrow(error?: Function, message?: string): this;
	public toThrow(error?: any, message?: string): this {
		throw new Error('Not implemented');
	}

	public toNotThrow(message?: string): this {
		throw new Error('Not implemented');
	}

	public toBeA(constructor: Function, message?: string): this;
	public toBeA(constructor: string, message?: string): this;
	public toBeA(constructor: any, message?: string): this {
		throw new Error('Not implemented');
	}

	public toBeAn(constructor: Function, message?: string): this;
	public toBeAn(constructor: string, message?: string): this;
	public toBeAn(constructor: any, message?: string): this {
		return this.toBeA(constructor as any, message);
	}

	public toNotBeA(constructor: Function, message?: string): this;
	public toNotBeA(constructor: string, message?: string): this;
	public toNotBeA(constructor: any, message?: string): this {
		throw new Error('Not implemented');
	}

	public toNotBeAn(constructor: Function, message?: string): this;
	public toNotBeAn(constructor: string, message?: string): this;
	public toNotBeAn(constructor: any, message?: string): this {
		throw new Error('Not implemented');
	}

	public toIncludeKey(key: number, message?: string): this;
	public toIncludeKey(key: string, message?: string): this;
	public toIncludeKey(key: any, message?: string): this {
		throw new Error('Not implemented');
	}

	public toContainKey(key: number, message?: string): this;
	public toContainKey(key: string, message?: string): this;
	public toContainKey(key: any, message?: string): this {
		throw new Error('Not implemented');
	}

	public toIncludeKeys(keys: number[], message?: string): this;
	public toIncludeKeys(keys: string[], message?: string): this;
	public toIncludeKeys(key: any[], message?: string): this {
		throw new Error('Not implemented');
	}

	public toContainKeys(keys: number[], message?: string): this;
	public toContainKeys(keys: string[], message?: string): this;
	public toContainKeys(key: any[], message?: string): this {
		throw new Error('Not implemented');
	}

	public toExcludeKey(key: number, message?: string): this;
	public toExcludeKey(key: string, message?: string): this;
	public toExcludeKey(key: any, message?: string): this {
		throw new Error('Not implemented');
	}

	public toNotIncludeKey(key: number, message?: string): this;
	public toNotIncludeKey(key: string, message?: string): this;
	public toNotIncludeKey(key: any, message?: string): this {
		throw new Error('Not implemented');
	}

	public toNotContainKey(key: number, message?: string): this;
	public toNotContainKey(key: string, message?: string): this;
	public toNotContainKey(key: any, message?: string): this {
		throw new Error('Not implemented');
	}

	public toExcludeKeys(keys: number[], message?: string): this;
	public toExcludeKeys(keys: string[], message?: string): this;
	public toExcludeKeys(key: any[], message?: string): this {
		throw new Error('Not implemented');
	}

	public toNotIncludeKeys(keys: number[], message?: string): this;
	public toNotIncludeKeys(keys: string[], message?: string): this;
	public toNotIncludeKeys(key: any[], message?: string): this {
		throw new Error('Not implemented');
	}

	public toNotContainKeys(keys: number[], message?: string): this;
	public toNotContainKeys(keys: string[], message?: string): this;
	public toNotContainKeys(keys: any[], message?: string): this {
		throw new Error('Not implemented');
	}
}
