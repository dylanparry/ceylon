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
		booleans.forEach((sut: boolean) => {
			it(`should not throw when the value is ${sut}`, () => {
				const expect = new Expectation(true);

				expect.toExist();
			});
		});

		it('should throw when the value is undefined', () => {
			let sut: boolean;
			const expect = new Expectation(sut);

			throwsError(() => expect.toExist());
		});
	});

	describe('toNotExist', () => {
		it('should not throw when the value is undefined', () => {
			let sut: boolean;
			const expect = new Expectation(sut);

			expect.toNotExist();
		});

		booleans.forEach((sut: boolean) => {
			it(`should throw when the value is ${sut}`, () => {
				const expect = new Expectation(true);

				throwsError(() => expect.toNotExist());
			});
		});
	});
});
