import { throwsError } from '../helpers';
import Expectation from '../../src/expectations/string-expectation';

const strings: string[] = [
	'I am a string',
	'',
	null,
];

describe('StringExpectation', () => {
	describe('toBe()', () => {
		it('should not throw when values are equal', () => {
			const expect = new Expectation('string');

			expect.toBe('string');
		});

		it('should throw when values are different', () => {
			const expect = new Expectation('string');

			throwsError(() => expect.toBe('Not the same'));
		});

		it('should be chainable', () => {
			const expect = new Expectation('string');

			expect.toBe('string').toBe('string');
		});
	});

	describe('toNotBe()', () => {
		it('should not throw when values are different', () => {
			const expect = new Expectation('string');

			expect.toNotBe('different');
		});

		it('should throw when values are equal', () => {
			const expect = new Expectation('string');

			throwsError(() => expect.toNotBe('string'));
		});

		it('should be chainable', () => {
			const expect = new Expectation('string');

			expect.toNotBe('different').toNotBe('different');
		});
	});

	describe('toExist', () => {
		strings.forEach((sut: string) => {
			it(`should not throw when value is ${JSON.stringify(sut)}`, () => {
				const expect = new Expectation(sut);

				expect.toExist();
			});
		});

		it('should throw when value is undefined', () => {
			let sut: string;
			const expect = new Expectation(sut);

			throwsError(() => expect.toExist());
		});

		it('should be chainable', () => {
			const expect = new Expectation('string');

			expect.toExist().toExist();
		});
	});

	describe('toNotExist', () => {
		it('should not throw when value is undefined', () => {
			let sut: string;
			const expect = new Expectation(sut);

			expect.toNotExist();
		});

		strings.forEach((sut: string) => {
			it(`should throw when value is is ${JSON.stringify(sut)}`, () => {
				const expect = new Expectation(sut);

				throwsError(() => expect.toNotExist());
			});
		});

		it('should be chainable', () => {
			let sut: string;
			const expect = new Expectation(sut);

			expect.toNotExist().toNotExist();
		});
	});
});
