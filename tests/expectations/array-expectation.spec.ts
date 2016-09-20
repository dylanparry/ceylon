import { throwsError } from '../helpers';
import Expectation from '../../src/expectations/array-expectation';

const arrays: number[][] = [
	[1, 2, 3],
	[],
	null,
];

describe('ArrayExpectation', () => {
	describe('toBe()', () => {
		it('should not throw when arrays are the same object', () => {
			const sut = [1, 2, 3];
			const array = sut;

			const expect = new Expectation(sut);

			expect.toBe(array);
		});

		it('should throw when arrays are different objects', () => {
			const sut = [1, 2, 3];
			const array = [1, 2, 3];

			const expect = new Expectation(sut);

			throwsError(() => expect.toBe(array));
		});
	});

	describe('toNotBe()', () => {
		it('should throw when arrays are different objects', () => {
			const sut = [1, 2, 3];
			const array = sut;

			const expect = new Expectation(sut);

			throwsError(() => expect.toNotBe(array));
		});

		it('should not throw when arrays are the same object', () => {
			const sut = [1, 2, 3];
			const array = [1, 2, 3];

			const expect = new Expectation(sut);

			expect.toNotBe(array);
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
