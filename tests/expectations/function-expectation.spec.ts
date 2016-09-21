import { throwsError } from '../helpers';
import Expectation from '../../src/expectations/function-expectation';

describe('FunctionExpectation', () => {
	describe('toThrow', () => {
		it('should not throw when the tested function throws', () => {
			const expect = new Expectation(() => { throw new Error(); });

			expect.toThrow();
		});

		it('should not throw when the tested function throws the specified message', () => {
			const expect = new Expectation(() => { throw new Error('An Error'); });

			expect.toThrow('An Error');
		});

		it('should not throw when the tested function throws the specified type', () => {
			const expect = new Expectation(() => { throw new ReferenceError(); });

			expect.toThrow(ReferenceError);
		});

		it('should throw when the tested function does not throw', () => {
			const expect = new Expectation(() => true);

			throwsError(() => expect.toThrow());
		});

		it('should be chainable', () => {
			const expect = new Expectation(() => { throw new Error() });

			expect.toThrow().toThrow();
		});
	});

	describe('toNotThrow', () => {
		it('should not throw when the tested function does not throw', () => {
			const expect = new Expectation(() => true);

			expect.toNotThrow();
		});

		it('should throw when the tested function throws', () => {
			const expect = new Expectation(() => { throw new Error(); });

			throwsError(() => expect.toNotThrow());
		});

		it('should be chainable', () => {
			const expect = new Expectation(() => true);

			expect.toNotThrow().toNotThrow();
		});
	});

	describe('toBeA / toBeAn', () => {
		it('should not throw when type is a function', () => {
			const expect = new Expectation(Math.random);

			expect.toBeA('function');
			expect.toBeAn('function');
		});

		it('should throw when type is not a function', () => {
			const expect = new Expectation(Math.random);

			throwsError(() => expect.toBeA('string'));
			throwsError(() => expect.toBeAn('object'));
		});

		it('should be chainable', () => {
			const expect = new Expectation(Math.random);

			expect.toBeA('function').toBeA('function');
			expect.toBeAn('function').toBeAn('function');
		});
	});

	describe('toNotBeA / toNotBeAn', () => {
		it('should not throw when type is not a function', () => {
			const expect = new Expectation(Math.random);

			expect.toNotBeA('string');
			expect.toNotBeAn('object');
		});

		it('should throw when type is a function', () => {
			const expect = new Expectation(Math.random);

			throwsError(() => expect.toNotBeA('function'));
			throwsError(() => expect.toNotBeAn('function'));
		});

		it('should be chainable', () => {
			const expect = new Expectation(Math.random);

			expect.toNotBeA('string').toNotBeA('string');
			expect.toNotBeAn('object').toNotBeAn('object');
		});
	});
});
