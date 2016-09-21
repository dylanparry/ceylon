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

		it('should be chainable', () => {
			const expect = new Expectation(true);

			expect.toBe(true).toBe(true);
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

		it('should be chainable', () => {
			const expect = new Expectation(true);

			expect.toNotBe(false).toNotBe(false);
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

		it('should be chainable', () => {
			const expect = new Expectation(true);

			expect.toExist().toExist();
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

		it('should be chainable', () => {
			let sut: boolean;
			const expect = new Expectation(sut);

			expect.toNotExist().toNotExist();
		});
	});

	describe('toBeA / toBeAn', () => {
		it('should not throw when value is a boolean', () => {
			const expect = new Expectation(true);

			expect.toBeA('boolean');
			expect.toBeAn('boolean');
		});

		it('should throw when value is not a boolean', () => {
			const expect = new Expectation(true);

			throwsError(() => expect.toBeA('string'));
			throwsError(() => expect.toBeAn('object'));
		});

		it('should be chainable', () => {
			const expect = new Expectation(true);

			expect.toBeA('boolean').toBeA('boolean');
			expect.toBeAn('boolean').toBeAn('boolean');
		});
	});

	describe('toNotBeA / toNotBeAn', () => {
		it('should not throw when value is not a boolean', () => {
			const expect = new Expectation(true);

			expect.toNotBeA('string');
			expect.toNotBeAn('string');
		});

		it('should throw when value is a boolean', () => {
			const expect = new Expectation(true);

			throwsError(() => expect.toNotBeA('boolean'));
			throwsError(() => expect.toNotBeAn('boolean'));
		});

		it('should be chainable', () => {
			const expect = new Expectation(true);

			expect.toNotBeA('string').toNotBeA('string');
			expect.toNotBeAn('object').toNotBeAn('object');
		});
	});
});
