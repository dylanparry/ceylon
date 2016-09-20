import { throwsError } from './helpers';
import Expectation from '../string-expectation';

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
});