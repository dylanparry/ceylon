import { throwsError } from './helpers';
import Expectation from '../../src/expectations/array-expectation';

const arrays: number[][] = [
	[1, 2, 3],
	[],
	null,
];

describe('ArrayExpectation', () => {
	describe('toBe()', () => {
		it('should not throw when arrays are the same object', () => {
			const actual = [1, 2, 3];
			const expected = actual;

			const expect = new Expectation(actual);

			expect.toBe(expected);
		});

		it('should throw when arrays are different objects', () => {
			const actual = [1, 2, 3];
			const expected = [1, 2, 3];

			const expect = new Expectation(actual);

			throwsError(() => expect.toBe(expected));
		});
	});

	describe('toNotBe()', () => {
		it('should throw when arrays are different objects', () => {
			const actual = [1, 2, 3];
			const expected = actual;

			const expect = new Expectation(actual);

			throwsError(() => expect.toNotBe(expected));
		});

		it('should not throw when arrays are the same object', () => {
			const actual = [1, 2, 3];
			const expected = [1, 2, 3];

			const expect = new Expectation(actual);

			expect.toNotBe(expected);
		});
	});

	describe('toExist', () => {
		arrays.forEach((array: number[]) => {
			it(`should not throw when array is ${JSON.stringify(array)}`, () => {
				const expect = new Expectation(array);

				expect.toExist();
			});
		});

		it('should throw when array is undefined', () => {
			let array: number[];
			const expect = new Expectation(array);

			throwsError(() => expect.toExist());
		});
	});

	describe('toNotExist', () => {
		it('should not throw when array is undefined', () => {
			let array: number[];
			const expect = new Expectation(array);

			expect.toNotExist();
		});

		arrays.forEach((array: number[]) => {
			it(`should throw array is ${JSON.stringify(array)}`, () => {
				const expect = new Expectation(array);

				throwsError(() => expect.toNotExist());
			});
		});
	});

	describe('toEqual', () => {
		it('should not throw when arrays are deep equal', () => {
			const expect = new Expectation([1, 2, 3]);

			expect.toEqual([1, 2, 3]);
		});

		it('should throw when arrays are different', () => {
			const expect = new Expectation([1, 2, 3]);

			throwsError(() => expect.toEqual([1, 2, 3, 4]));
		});
	});

	describe('toNotEqual', () => {
		it('should not throw when arrays are different', () => {
			const expect = new Expectation([1, 2, 3]);

			expect.toNotEqual([1, 2, 3, 4]);
		});

		it('should throw when arrays are deep equal', () => {
			const expect = new Expectation([1, 2, 3]);

			throwsError(() => expect.toNotEqual([1, 2, 3]));
		});
	});
});
