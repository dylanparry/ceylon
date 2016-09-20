import { throwsError } from './helpers';
import Expectation from '../../src/expectations/array-expectation';

describe('ArrayExpectation', () => {
	describe('toBe()', () => {
		it('should not throw an error when arrays share the same reference', () => {
			const actual = [1, 2, 3];   // Two different arrays
			const expected = actual; // containing the same values

			const expect = new Expectation(actual);

			expect.toBe(expected);
		});

		it('should throw an error when arrays do not share the same reference', () => {
			const actual = [1, 2, 3];
			const expected = [1, 2, 3];

			const expect = new Expectation(actual);

			throwsError(() => expect.toBe(expected));
		});
	});

	describe('toNotBe()', () => {
		it('should throw an error when arrays share the same reference', () => {
			const actual = [1, 2, 3];
			const expected = actual;

			const expect = new Expectation(actual);

			throwsError(() => expect.toNotBe(expected));
		});

		it('should not throw an error when array do not share the same reference', () => {
			const actual = [1, 2, 3];   // Two different arrays
			const expected = [1, 2, 3]; // containing the same values

			const expect = new Expectation(actual);

			expect.toNotBe(expected);
		});
	});

	describe('toExist', () => {
		it('should not throw an error when the array exists', () => {
			const expect = new Expectation([1, 2, 3]);

			expect.toExist();
		});

		it('should throw an error when the array is undefined', () => {
			let array: Array<number>;
			const expect = new Expectation(array);

			throwsError(() => expect.toExist());
		});
	});

	describe('toNotExist', () => {
		it('should not throw an error when the array is undefined', () => {
			let array: Array<number>;
			const expect = new Expectation(array);

			expect.toNotExist();
		});

		it('should throw an error when the array exists', () => {
			const expect = new Expectation([1, 2, 3]);

			throwsError(() => expect.toNotExist());
		});
	});

	describe('toEqual', () => {
		it('should not throw an error when the two arrays are equal', () => {
			const expect = new Expectation([1, 2, 3]);

			expect.toEqual([1, 2, 3]);
		});

		it('should throw an error when the two arrays are not equal', () => {
			const expect = new Expectation([1, 2, 3]);

			throwsError(() => expect.toEqual([1, 2, 3, 4]));
		});
	});

	describe('toNotEqual', () => {
		it('should not throw an error when the two arrays are different', () => {
			const expect = new Expectation([1, 2, 3]);

			expect.toNotEqual([1, 2, 3, 4]);
		});

		it('should throw an error when the two arrays are equal', () => {
			const expect = new Expectation([1, 2, 3]);

			throwsError(() => expect.toNotEqual([1, 2, 3]));
		});
	});
});