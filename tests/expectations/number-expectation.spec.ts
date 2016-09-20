import { throwsError } from './helpers';
import Expectation from '../../src/expectations/number-expectation';

const numbers: number[] = [
	100,
	-100,
	0,
	Math.PI,
	null,
];

describe('NumberExpectation', () => {
	describe('toBe()', () => {
		it('should not throw when values are equal', () => {
			const expect = new Expectation(100);

			expect.toBe(100);
		});

		it('should throw when values are different', () => {
			const expect = new Expectation(100);

			throwsError(() => expect.toBe(90));
		});
	});

	describe('toNotBe()', () => {
		it('should not throw when values are different', () => {
			const expect = new Expectation(100);

			expect.toNotBe(90);
		});

		it('should throw when values are equal', () => {
			const expect = new Expectation(100);

			throwsError(() => expect.toNotBe(100));
		});
	});

	describe('toExist', () => {
		numbers.forEach((number: number) => {
			it(`should not throw when value is ${number}`, () => {
				const expect = new Expectation(number);

				expect.toExist();
			});
		});

		it('should throw when value is undefined', () => {
			let num: number;
			const expect = new Expectation(num);

			throwsError(() => expect.toExist());
		});
	});

	describe('toNotExist', () => {
		it('should not throw when value is undefined', () => {
			let num: number;
			const expect = new Expectation(num);

			expect.toNotExist();
		});

		numbers.forEach((number: number) => {
			it(`should throw when value is ${number}`, () => {
				const expect = new Expectation(number);

				throwsError(() =>expect.toNotExist());
			});
		});
	});
});