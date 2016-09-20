import { throwsError } from '../helpers';
import Expectation from '../../src/expectations/boolean-expectation';

const booleans: boolean[] = [
	true,
	false,
	null,
];

describe('BooleanExpectation', () => {
	describe('toBe()', () => {
		it('should not throw when values are equal', () => {
			const expect = new Expectation(true);

			expect.toBe(true);
		});

		it('should throw when values are different', () => {
			const expect = new Expectation(true);

			throwsError(() => expect.toBe(false));
		});
	});

	describe('toNotBe()', () => {
		it('should not throw when values are different', () => {
			const expect = new Expectation(true);

			expect.toNotBe(false);
		});

		it('should throw when values are equal', () => {
			const expect = new Expectation(true);

			throwsError(() => expect.toNotBe(true));
		});
	});

	describe('toExist', () => {
		booleans.forEach((bool: boolean) => {
			it(`should not throw when the value is ${bool}`, () => {
				const expect = new Expectation(true);

				expect.toExist();
			});
		});

		it('should throw when the value is undefined', () => {
			let bool: boolean;
			const expect = new Expectation(bool);

			throwsError(() => expect.toExist());
		});
	});

	describe('toNotExist', () => {
		it('should not throw when the value is undefined', () => {
			let bool: boolean;
			const expect = new Expectation(bool);

			expect.toNotExist();
		});

		booleans.forEach((bool: boolean) => {
			it(`should throw when the value is ${bool}`, () => {
				const expect = new Expectation(true);

				throwsError(() => expect.toNotExist());
			});
		});
	});
});
