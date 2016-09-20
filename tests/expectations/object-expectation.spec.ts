import { throwsError } from './helpers';
import Expectation from '../../src/expectations/object-expectation';

describe('ObjectExpectation', () => {
	describe('toBe()', () => {
		it('should not throw an error when objects share the same reference', () => {
			const actual = { value: 1 };
			const expected = actual;

			const expect = new Expectation(actual);

			expect.toBe(expected);
		});

		it('should throw an error when strings do not share the same reference', () => {
			const actual = { value: 1 };   // Two different objects
			const expected = { value: 1 }; // containing the same values

			const expect = new Expectation(actual);

			throwsError(() => expect.toBe(expected));
		});
	});

	describe('toNotBe()', () => {
		it('should not throw an error when objects do not share the same reference', () => {
			const actual = { value: 1 };
			const expected = { value: 1 };

			const expect = new Expectation(actual);

			expect.toNotBe(expected);
		});

		it('should throw an error when strings share the same reference', () => {
			const actual = { value: 1 };
			const expected = actual;

			const expect = new Expectation(actual);

			throwsError(() => expect.toNotBe(expected));
		});
	});

	describe('toExist', () => {
		it('should not throw an error when the object exists', () => {
			const expect = new Expectation({});

			expect.toExist();
		});

		it('should throw an error when the object is undefined', () => {
			let object: Object;
			const expect = new Expectation(object);

			throwsError(() => expect.toExist());
		});
	});

	describe('toNotExist', () => {
		it('should not throw an error when the object is undefined', () => {
			let object: Object;
			const expect = new Expectation(object);

			expect.toNotExist();
		});

		it('should throw an error when the object exists', () => {
			const expect = new Expectation({});

			throwsError(() => expect.toNotExist());
		});
	});

	describe('toEqual', () => {
		it('should not throw an error when the two objects are equal', () => {
			const expect = new Expectation({ name: 'Object', value: 1 });

			expect.toEqual({ name: 'Object', value: 1 });
		});

		it('should throw an error when the two objects are not equal', () => {
			const expect = new Expectation({ name: 'Object', value: 1 });

			throwsError(() => expect.toEqual({ name: 'Object', value: 2 }));
		});
	});

	describe('toNotEqual', () => {
		it('should not throw an error when the two objects are different', () => {
			const expect = new Expectation({ name: 'Object', value: 1 });

			expect.toNotEqual({ name: 'Object', value: '1' });
		});

		it('should throw an error when the two objects are equal', () => {
			const expect = new Expectation({ name: 'Object', value: 1 });

			throwsError(() => expect.toNotEqual({ name: 'Object', value: 1 }));
		});
	});
});