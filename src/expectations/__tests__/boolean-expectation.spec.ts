import { throwsError } from './helpers';
import Expectation from '../boolean-expectation';

describe('BooleanExpectation', () => {
	describe('toBe()', () => {
		it('should not throw an error when boolean values match', () => {
			const expect = new Expectation(true);

			expect.toBe(true);
		});

		it('should throw an error when boolean values do not match', () => {
			const expect = new Expectation(true);

			throwsError(() => expect.toBe(false));
		});
	});

	describe('toNotBe()', () => {
		it('should not throw an error when boolean values do not match', () => {
			const expect = new Expectation(true);

			expect.toNotBe(false);
		});

		it('should throw an error when boolean values match', () => {
			const expect = new Expectation(true);

			throwsError(() => expect.toNotBe(true));
		});
	});
});
