import { throwsError } from './helpers';
import Expectation from '../../src/expectations/string-expectation';

describe('StringExpectation', () => {
	describe('toBe()', () => {
		it('should not throw an error when strings match', () => {
			const expect = new Expectation('string');

			expect.toBe('string');
		});

		it('should throw an error when strings do not match', () => {
			const expect = new Expectation('string');

			throwsError(() => expect.toBe('Not the same'));
		});
	});

	describe('toNotBe()', () => {
		it('should not throw an error when strings do not match', () => {
			const expect = new Expectation('string');

			expect.toNotBe('different');
		});

		it('should throw an error when strings match', () => {
			const expect = new Expectation('string');

			throwsError(() => expect.toNotBe('string'));
		});
	});

	describe('toExist', () => {
		it('should not throw an error when the string exists', () => {
			const expect = new Expectation('string');

			expect.toExist();
		});

		it('should throw an error when the string is undefined', () => {
			let string: string;
			const expect = new Expectation(string);

			throwsError(() => expect.toExist());
		});
	});

	describe('toNotExist', () => {
		it('should not throw an error when the string is undefined', () => {
			let string: string;
			const expect = new Expectation(string);

			expect.toNotExist();
		});

		it('should throw an error when the string exists', () => {
			const expect = new Expectation('string');

			throwsError(() => expect.toNotExist());
		});
	});
});