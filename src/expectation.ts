import * as deepEqual from 'deep-equal';

import assert from './assert';
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
		assert({
			assertion: typeof this.actual !== 'undefined',
			message: message || 'Expected item to exist',
		});

		return this;
	}

	public toNotExist(message?: string): this {
		assert({
			assertion: typeof this.actual === 'undefined',
			message: message || 'Expected item to not exist',
		});

		return this;
	}

	public toBe(value: boolean, message?: string): this;
	public toBe(value: number, message?: string): this;
	public toBe(value: string, message?: string): this;
	public toBe(value: Function, message?: string): this;
	public toBe(value: T[], message?: string): this;
	public toBe(value: T, message?: string): this;
	public toBe(value: any, message?: string): this {
		assert({
			actual: this.actual,
			assertion: this.actual === value,
			expected: value,
			message: message || `Expected ${JSON.stringify(this.actual)} to be ${JSON.stringify(value)}`,
		});

		return this;
	}

	public toNotBe(value: boolean, message?: string): this;
	public toNotBe(value: number, message?: string): this;
	public toNotBe(value: string, message?: string): this;
	public toNotBe(value: Function, message?: string): this;
	public toNotBe(value: T[], message?: string): this;
	public toNotBe(value: T, message?: string): this;
	public toNotBe(value: any, message?: string): this {
		assert({
			actual: this.actual,
			assertion: this.actual !== value,
			expected: value,
			message: message || `Expected ${JSON.stringify(this.actual)} to not be ${JSON.stringify(value)}`,
		});

		return this;
	}

	public toEqual(value: boolean, message?: string): this;
	public toEqual(value: number, message?: string): this;
	public toEqual(value: string, message?: string): this;
	public toEqual(value: Function, message?: string): this;
	public toEqual(value: T[], message?: string): this;
	public toEqual(value: T, message?: string): this;
	public toEqual(value: any, message?: string): this {
		assert({
			actual: this.actual,
			assertion: deepEqual(this.actual, value),
			expected: value,
			message: message || `Expected ${JSON.stringify(this.actual)} to equal ${JSON.stringify(value)}`,
		});

		return this;
	}

	public toNotEqual(value: boolean, message?: string): this;
	public toNotEqual(value: number, message?: string): this;
	public toNotEqual(value: string, message?: string): this;
	public toNotEqual(value: Function, message?: string): this;
	public toNotEqual(value: T[], message?: string): this;
	public toNotEqual(value: T, message?: string): this;
	public toNotEqual(value: any, message?: string): this {
		assert({
			actual: this.actual,
			assertion: !deepEqual(this.actual, value),
			expected: value,
			message: message || `Expected ${JSON.stringify(this.actual)} to not equal ${JSON.stringify(value)}`,
		});

		return this;
	}

	public toBeTrue(message?: string): this {
		return this.toBe(true, message);
	}

	public toBeFalse(message?: string): this {
		return this.toBe(false, message);
	}

	public toBeLessThan(value: number, message?: string): this {
		if (typeof this.actual !== 'number') {
			throw assert({
				assertion: false,
				message: 'Item being tested should be a number',
			});
		}

		assert({
			assertion: this.actual as number < value,
			message: message || `Expected ${this.actual} to be less than ${value}`,
		});

		return this;
	}

	public toBeFewerThan(value: number, message?: string): this {
		return this.toBeLessThan(value, message);
	}

	public toBeLessThanOrEqualTo(value: number, message?: string): this {
		if (typeof this.actual !== 'number') {
			throw assert({
				assertion: false,
				message: 'Item being tested should be a number',
			});
		}

		assert({
			assertion: this.actual <= value,
			message: message || `Expected ${this.actual} to be less than or equal to ${value}`,
		});

		return this;
	}

	public toBeFewerThanOrEqualTo(value: number, message?: string): this {
		return this.toBeLessThanOrEqualTo(value, message);
	}

	public toBeGreaterThan(value: number, message?: string): this {
		if (typeof this.actual !== 'number') {
			throw assert({
				assertion: false,
				message: 'Item being tested should be a number',
			});
		}

		assert({
			assertion: this.actual > value,
			message: message || `Expected ${this.actual} to be greater than ${value}`,
		});

		return this;
	}

	public toBeMoreThan(value: number, message?: string): this {
		return this.toBeGreaterThan(value, message);
	}

	public toBeGreaterThanOrEqualTo(value: number, message?: string): this {
		if (typeof this.actual !== 'number') {
			throw assert({
				assertion: false,
				message: 'Item being tested should be a number',
			});
		}

		assert({
			assertion: this.actual >= value,
			message: message || `Expected ${this.actual} to be greater than or equal to ${value}`,
		});

		return this;
	}

	public toBeMoreThanOrEqualTo(value: number, message?: string): this {
		return this.toBeGreaterThanOrEqualTo(value, message);
	}

	public toMatch(value: RegExp, message?: string): this {
		if (typeof this.actual !== 'string') {
			throw assert({
				assertion: false,
				message: 'Item being tested should be a string',
			});
		}

		assert({
			assertion: value.test(this.actual),
			message: message || `Expected ${this.actual} to match ${value}`,
		});

		return this;
	}

	public toNotMatch(value: RegExp, message?: string): this {
		if (typeof this.actual !== 'string') {
			throw assert({
				assertion: false,
				message: 'Item being tested should be a string',
			});
		}

		assert({
			assertion: !value.test(this.actual),
			message: message || `Expected ${this.actual} to match ${value}`,
		});

		return this;
	}

	public toInclude(value: string, message?: string): this;
	public toInclude(value: T, message?: string): this;
	public toInclude(value: any, message?: string): this {
		assert({
			assertion: typeof this.actual === 'string' || Array.isArray(this.actual) || typeof this.actual === 'object',
			message: 'Item being tested should be a string, array, or object',
		});

		if (typeof this.actual === 'string') {
			assert({
				assertion: (this.actual as string).indexOf(value) >= 0,
				message: message || `Expected ${this.actual} to contain ${value}`,
			});
		}
		else if (Array.isArray(this.actual)) {
			// Assume the value is not included
			let included: boolean = false;

			for (let i = 0; i < this.actual.length; i++) {
				if (deepEqual(this.actual[i], value)) {
					included = true;
					break; // We've found a match, so exit the loop
				}
			}

			assert({
				assertion: included,
				message: message || `Expected ${JSON.stringify(this.actual)} to contain ${JSON.stringify(value)}`,
			});
		}
		else if (typeof this.actual === 'object') {
			/*
			 * For this test, it's easier to assume that the value is present,
			 * then set "included" to "false" as soon as one part of the value
			 * is found to be missing
			 */
			let included: boolean = true;

			const valueProperties = Object.getOwnPropertyNames(value);

			// Loop through the properties in the value
			for (let i = 0; i < valueProperties.length; i++) {
				// Check if this.actual has this property
				if (!((this.actual as Object).hasOwnProperty(valueProperties[i]))) {
					included = false;
					break; // Break the loop early as we've found a property that doesn't exist
				}

				// Now check that the value of the property is the same
				if (!deepEqual(this.actual[valueProperties[i]], value[valueProperties[i]])) {
					included = false;
				}
			}

			assert({
				assertion: included,
				message: message || `Expected ${JSON.stringify(this.actual)} to contain ${JSON.stringify(value)}`,
			});
		}

		return this;
	}

	public toContain(value: string, message?: string): this;
	public toContain(value: T, message?: string): this;
	public toContain(value: any, message?: string): this {
		return this.toInclude(value, message);
	}

	public toExclude(value: string, message?: string): this;
	public toExclude(value: T, message?: string): this;
	public toExclude(value: any, message?: string): this {
		assert({
			assertion: typeof this.actual === 'string' || Array.isArray(this.actual) || typeof this.actual === 'object',
			message: 'Item being tested should be a string, array, or object',
		});

		if (typeof this.actual === 'string') {
			assert({
				assertion: (this.actual as string).indexOf(value) === -1,
				message: message || `Expected ${this.actual} to not contain ${value}`,
			});
		}
		else if (Array.isArray(this.actual)) {
			// Assume the value is not included
			let included: boolean = false;

			for (let i = 0; i < this.actual.length; i++) {
				if (deepEqual(this.actual[i], value)) {
					included = true;
					break; // We've found a match, so exit the loop
				}
			}

			assert({
				assertion: !included,
				message: message || `Expected ${JSON.stringify(this.actual)} to not contain ${JSON.stringify(value)}`,
			});
		}
		else if (typeof this.actual === 'object') {
			// Assume the value is not included
			let included: boolean = false;

			const valueProperties = Object.getOwnPropertyNames(value);

			// Loop through the properties in the value
			for (let i = 0; i < valueProperties.length; i++) {
				// Check if this.actual has this property
				if ((this.actual as Object).hasOwnProperty(valueProperties[i])) {
					// Now check if the property is the same in value
					if (deepEqual(this.actual[valueProperties[i]], value[valueProperties[i]])) {
						included = true;
						break; // Break the loop early as we've found a property that doesn't exist
					}
				}
			}

			assert({
				assertion: !included,
				message: message || `Expected ${JSON.stringify(this.actual)} to not contain ${JSON.stringify(value)}`,
			});
		}

		return this;
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
		if (typeof this.actual !== 'function') {
			throw assert({
				assertion: false,
				message: 'Item being tested should be a function',
			});
		}

		if (typeof error === 'undefined') {
			let threw: boolean = false;

			try {
				this.actual();
			}
			catch (e) {
				threw = true;
			}

			assert({
				assertion: threw,
				message: message || 'Expected function to throw',
			});
		}
		else if (typeof error === 'string') {
			try {
				this.actual();
			}
			catch (e) {
				assert({
					assertion: e.message === error,
					message: message || `Expected error message to be "${error}""`,
				});
			}
		}
		else if (error instanceof RegExp) {
			try {
				this.actual();
			}
			catch (e) {
				assert({
					assertion: error.test(e.message),
					message: message || `Expected error message to match ${error}`,
				});
			}
		}
		else if (typeof error === 'function') {
			try {
				this.actual();
			}
			catch (e) {
				assert({
					assertion: e instanceof error,
					message: message || `Expected error to be ${error}`,
				});
			}
		}

		return this;
	}

	public toNotThrow(message?: string): this {
		if (typeof this.actual !== 'function') {
			throw assert({
				assertion: false,
				message: 'Item being tested should be a function',
			});
		}

		let threw: boolean = false;

		try {
			this.actual();
		}
		catch (e) {
			threw = true;
		}

		assert({
			assertion: !threw,
			message: message || 'Expected function to not throw',
		});

		return this;
	}

	public toBeA(constructor: Function, message?: string): this;
	public toBeA(constructor: string, message?: string): this;
	public toBeA(constructor: any, message?: string): this {
		if (typeof constructor === 'string') {
			assert({
				actual: typeof this.actual,
				assertion: typeof this.actual === constructor,
				expected: constructor,
				message: message || `Expected item to be a ${constructor}`,
			});
		}
		else if (typeof constructor === 'function') {
			assert({
				actual: typeof this.actual,
				assertion: this.actual instanceof constructor,
				expected: constructor,
				message: message || `Expected item to be a ${constructor}`,
			});
		}

		return this;
	}

	public toBeAn(constructor: Function, message?: string): this;
	public toBeAn(constructor: string, message?: string): this;
	public toBeAn(constructor: any, message?: string): this {
		return this.toBeA(constructor as any, message);
	}

	public toNotBeA(constructor: Function, message?: string): this;
	public toNotBeA(constructor: string, message?: string): this;
	public toNotBeA(constructor: any, message?: string): this {
		if (typeof constructor === 'string') {
			assert({
				assertion: !(typeof this.actual === constructor),
				message: message || `Expected item to not be a ${constructor}`,
			});
		}
		else if (typeof constructor === 'function') {
			assert({
				assertion: !(this.actual instanceof constructor),
				message: message || `Expected item to not be a ${constructor}`,
			});
		}

		return this;
	}

	public toNotBeAn(constructor: Function, message?: string): this;
	public toNotBeAn(constructor: string, message?: string): this;
	public toNotBeAn(constructor: any, message?: string): this {
		return this.toNotBeA(constructor, message);
	}

	public toIncludeKey(key: number, message?: string): this;
	public toIncludeKey(key: string, message?: string): this;
	public toIncludeKey(key: any, message?: string): this {
		assert({
			assertion: typeof this.actual === 'function' || Array.isArray(this.actual) || typeof this.actual === 'object',
			message: 'Tested item should be a function, array, or object',
		});

		if (typeof this.actual === 'function') {
			assert({
				assertion: (this.actual as Function).hasOwnProperty(key),
				message: message || `Expected function to have key ${key}`,
			});
		}
		else if (Array.isArray(this.actual)) {
			assert({
				assertion: (this.actual as any[]).hasOwnProperty(key),
				message: message || `Expected array to have key ${key}`,
			});
		}
		else if (typeof this.actual === 'object') {
			assert({
				assertion: (this.actual as Object).hasOwnProperty(key),
				message: message || `Expected object to have key ${key}`,
			});
		}

		return this;
	}

	public toContainKey(key: number, message?: string): this;
	public toContainKey(key: string, message?: string): this;
	public toContainKey(key: any, message?: string): this {
		return this.toIncludeKey(key, message);
	}

	public toIncludeKeys(keys: number[], message?: string): this;
	public toIncludeKeys(keys: string[], message?: string): this;
	public toIncludeKeys(keys: any[], message?: string): this {
		assert({
			assertion: typeof this.actual === 'function' || Array.isArray(this.actual) || typeof this.actual === 'object',
			message: 'Tested item should be a function, array, or object',
		});

		for (let i = 0; i < keys.length; i++) {
			this.toIncludeKey(keys[i], message);
		}

		return this;
	}

	public toContainKeys(keys: number[], message?: string): this;
	public toContainKeys(keys: string[], message?: string): this;
	public toContainKeys(keys: any[], message?: string): this {
		return this.toIncludeKeys(keys, message);
	}

	public toExcludeKey(key: number, message?: string): this;
	public toExcludeKey(key: string, message?: string): this;
	public toExcludeKey(key: any, message?: string): this {
		assert({
			assertion: typeof this.actual === 'function' || Array.isArray(this.actual) || typeof this.actual === 'object',
			message: 'Tested item should be a function, array, or object',
		});

		if (typeof this.actual === 'function') {
			assert({
				assertion: !((this.actual as Function).hasOwnProperty(key)),
				message: message || `Expected function to not have key ${key}`,
			});
		}
		else if (Array.isArray(this.actual)) {
			assert({
				assertion: !((this.actual as any[]).hasOwnProperty(key)),
				message: message || `Expected array to not have key ${key}`,
			});
		}
		else if (typeof this.actual === 'object') {
			assert({
				assertion: !((this.actual as Object).hasOwnProperty(key)),
				message: message || `Expected object to not have key ${key}`,
			});
		}

		return this;
	}

	public toNotIncludeKey(key: number, message?: string): this;
	public toNotIncludeKey(key: string, message?: string): this;
	public toNotIncludeKey(key: any, message?: string): this {
		return this.toExcludeKey(key, message);
	}

	public toNotContainKey(key: number, message?: string): this;
	public toNotContainKey(key: string, message?: string): this;
	public toNotContainKey(key: any, message?: string): this {
		return this.toExcludeKey(key, message);
	}

	public toExcludeKeys(keys: number[], message?: string): this;
	public toExcludeKeys(keys: string[], message?: string): this;
	public toExcludeKeys(keys: any[], message?: string): this {
		assert({
			assertion: typeof this.actual === 'function' || Array.isArray(this.actual) || typeof this.actual === 'object',
			message: 'Tested item should be a function, array, or object',
		});

		for (let i = 0; i < keys.length; i++) {
			this.toExcludeKey(keys[i], message);
		}

		return this;
	}

	public toNotIncludeKeys(keys: number[], message?: string): this;
	public toNotIncludeKeys(keys: string[], message?: string): this;
	public toNotIncludeKeys(keys: any[], message?: string): this {
		return this.toExcludeKeys(keys, message);
	}

	public toNotContainKeys(keys: number[], message?: string): this;
	public toNotContainKeys(keys: string[], message?: string): this;
	public toNotContainKeys(keys: any[], message?: string): this {
		return this.toExcludeKeys(keys, message);
	}
}
