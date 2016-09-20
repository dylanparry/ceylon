import { throwsError } from './helpers';
import Expectation from '../array-expectation';

describe('ArrayExpectation', () => {
	describe('toBe()', () => {
		it('should not throw an error when arrays do not share the same reference', () => {
			const actual = [1, 2, 3];   // Two different arrays
			const expected = [1, 2, 3]; // containing the same values

			const expect = new Expectation(actual);

			expect.toNotBe(expected);
		});

		it('should throw an error when arrays share the same reference', () => {
			const actual = [1, 2, 3];
			const expected = actual;

			const expect = new Expectation(actual);

			throwsError(() => expect.toNotBe(expected));
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
});