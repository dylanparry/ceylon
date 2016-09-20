import { throwsError } from './helpers';
import Expectation from '../../src/expectations/boolean-expectation';

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

	describe('toExist', () => {
		it('should not throw an error when the boolean value exists', () => {
			const expect = new Expectation(true);

			expect.toExist();
		});

		it('should throw an error when the boolean value is undefined', () => {
			let bool: boolean;
			const expect = new Expectation(bool);

			throwsError(() => expect.toExist());
		});
	});

	describe('toNotExist', () => {
		it('should not throw an error when the boolean value is undefined', () => {
			let bool: boolean;
			const expect = new Expectation(bool);

			expect.toNotExist();
		});

		it('should throw an error when the boolean value exists', () => {
			const expect = new Expectation(true);

			throwsError(() => expect.toNotExist());
		});
	});
});
