import { throwsError } from './helpers';
import Expectation from '../../src/expectations/number-expectation';

describe('NumberExpectation', () => {
	describe('toBe()', () => {
		it('should not throw an error when numbers match', () => {
			const expect = new Expectation(100);

			expect.toBe(100);
		});

		it('should throw an error when numbers do not match', () => {
			const expect = new Expectation(100);

			throwsError(() => expect.toBe(90));
		});
	});

	describe('toNotBe()', () => {
		it('should not throw an error when numbers do not match', () => {
			const expect = new Expectation(100);

			expect.toNotBe(90);
		});

		it('should throw an error when numbers match', () => {
			const expect = new Expectation(100);

			throwsError(() => expect.toNotBe(100));
		});
	});

	describe('toExist', () => {
		it('should not throw an error when the number exists', () => {
			const expect = new Expectation(100);

			expect.toExist();
		});

		it('should throw an error when the number is undefined', () => {
			let num: number;
			const expect = new Expectation(num);

			throwsError(() => expect.toExist());
		});
	});

	describe('toNotExist', () => {
		it('should not throw an error when the number is undefined', () => {
			let num: number;
			const expect = new Expectation(num);

			expect.toNotExist();
		});

		it('should throw an error when the number exists', () => {
			const expect = new Expectation(100);

			throwsError(() => expect.toNotExist());
		});
	});
});