import { throwsError } from '../helpers';
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

		it('should be chainable', () => {
			const expect = new Expectation(100);

			expect.toBe(100).toBe(100);
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

		it('should be chainable', () => {
			const expect = new Expectation(100);

			expect.toNotBe(90).toNotBe(90);
		});
	});

	describe('toExist', () => {
		numbers.forEach((sut: number) => {
			it(`should not throw when value is ${sut}`, () => {
				const expect = new Expectation(sut);

				expect.toExist();
			});
		});

		it('should throw when value is undefined', () => {
			let sut: number;
			const expect = new Expectation(sut);

			throwsError(() => expect.toExist());
		});

		it('should be chainable', () => {
			const expect = new Expectation(100);

			expect.toExist().toExist();
		});
	});

	describe('toNotExist', () => {
		it('should not throw when value is undefined', () => {
			let sut: number;
			const expect = new Expectation(sut);

			expect.toNotExist();
		});

		numbers.forEach((sut: number) => {
			it(`should throw when value is ${sut}`, () => {
				const expect = new Expectation(sut);

				throwsError(() => expect.toNotExist());
			});
		});

		it('should be chainable', () => {
			let sut: number;
			const expect = new Expectation(sut);

			expect.toNotExist().toNotExist();
		});
	});

	describe('toBeLessThan', () => {
		it('should not throw when value is greater', () => {
			const expect = new Expectation(10);

			expect.toBeLessThan(20);
		});

		it('should throw when value is equal', () => {
			const expect = new Expectation(10);

			throwsError(() => expect.toBeLessThan(10));
		});

		it('should throw when value is lower', () => {
			const expect = new Expectation(10);

			throwsError(() => expect.toBeLessThan(5));
		});

		it('should be chainable', () => {
			const expect = new Expectation(10);

			expect.toBeLessThan(20).toBeLessThan(20);
		});
	});

	describe('toBeLessThanOrEqualTo', () => {
		it('should not throw when value is greater', () => {
			const expect = new Expectation(10);

			expect.toBeLessThanOrEqualTo(20);
		});

		it('should not throw when value is equal', () => {
			const expect = new Expectation(10);

			expect.toBeLessThanOrEqualTo(10);
		});

		it('should throw when value is lower', () => {
			const expect = new Expectation(10);

			throwsError(() => expect.toBeLessThanOrEqualTo(5));
		});

		it('should be chainable', () => {
			const expect = new Expectation(10);

			expect.toBeLessThanOrEqualTo(20).toBeLessThanOrEqualTo(20);
		});
	});

	describe('toBeGreaterThan', () => {
		it('should not throw when value is lower', () => {
			const expect = new Expectation(10);

			expect.toBeGreaterThan(5);
		});

		it('should throw when value is equal', () => {
			const expect = new Expectation(10);

			throwsError(() => expect.toBeGreaterThan(10));
		});

		it('should throw when value is greater', () => {
			const expect = new Expectation(10);

			throwsError(() => expect.toBeGreaterThan(20));
		});

		it('should be chainable', () => {
			const expect = new Expectation(10);

			expect.toBeGreaterThan(5).toBeGreaterThan(5);
		});
	});

	describe('toBeGreaterThanOrEqualTo', () => {
		it('should not throw when value is lower', () => {
			const expect = new Expectation(10);

			expect.toBeGreaterThanOrEqualTo(5);
		});

		it('should not throw when value is equal', () => {
			const expect = new Expectation(10);

			expect.toBeGreaterThanOrEqualTo(10);
		});

		it('should throw when value is greater', () => {
			const expect = new Expectation(10);

			throwsError(() => expect.toBeGreaterThanOrEqualTo(20));
		});

		it('should be chainable', () => {
			const expect = new Expectation(10);

			expect.toBeGreaterThanOrEqualTo(5).toBeGreaterThanOrEqualTo(5);
		});
	});

	describe('toBeA / toBeAn', () => {
		it('should not throw when type is a number', () => {
			const expect = new Expectation(100);

			expect.toBeA('number');
			expect.toBeAn('number');
		});

		it('should throw when type is not a number', () => {
			const expect = new Expectation(100);

			throwsError(() => expect.toBeA('string'));
			throwsError(() => expect.toBeAn('object'));
		});

		it('should be chainable', () => {
			const expect = new Expectation(100);

			expect.toBeA('number').toBeA('number');
			expect.toBeAn('number').toBeAn('number');
		});
	});

	describe('toNotBeA / toNotBeAn', () => {
		it('should not throw when type is not a number', () => {
			const expect = new Expectation(100);

			expect.toNotBeA('string');
			expect.toNotBeAn('object');
		});

		it('should throw when type is a number', () => {
			const expect = new Expectation(100);

			throwsError(() => expect.toNotBeA('number'));
			throwsError(() => expect.toNotBeAn('number'));
		});

		it('should be chainable', () => {
			const expect = new Expectation(100);

			expect.toNotBeA('string').toNotBeA('string');
			expect.toNotBeAn('object').toNotBeAn('object');
		});
	});
});
