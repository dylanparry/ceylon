import { throwsError } from './helpers';
import Expectation from '../../src/expectations/object-expectation';

const objects: Object[] = [
	{},
	{ name: 'Object' },
	null,
];

describe('ObjectExpectation', () => {
	describe('toBe()', () => {
		it('should not throw when objects are the same object', () => {
			const actual = { value: 1 };
			const expected = actual;

			const expect = new Expectation(actual);

			expect.toBe(expected);
		});

		it('should throw when objects are different objects', () => {
			const actual = { value: 1 };
			const expected = { value: 1 };

			const expect = new Expectation(actual);

			throwsError(() => expect.toBe(expected));
		});
	});

	describe('toNotBe()', () => {
		it('should not throw when objects are different objects', () => {
			const actual = { value: 1 };
			const expected = { value: 1 };

			const expect = new Expectation(actual);

			expect.toNotBe(expected);
		});

		it('should throw when objects are the same object', () => {
			const actual = { value: 1 };
			const expected = actual;

			const expect = new Expectation(actual);

			throwsError(() => expect.toNotBe(expected));
		});
	});

	describe('toExist', () => {
		objects.forEach((object: Object) => {
			it(`should not throw when object is ${JSON.stringify(object)}`, () => {
				const expect = new Expectation(true);

				expect.toExist();
			});
		});

		it('should throw when object is undefined', () => {
			let object: Object;
			const expect = new Expectation(object);

			throwsError(() => expect.toExist());
		});
	});

	describe('toNotExist', () => {
		it('should not throw when object is undefined', () => {
			let object: Object;
			const expect = new Expectation(object);

			expect.toNotExist();
		});

		objects.forEach((object: Object) => {
			it(`should throw when object is ${JSON.stringify(object)}`, () => {
				const expect = new Expectation(true);

				throwsError(() => expect.toNotExist());
			});
		});
	});

	describe('toEqual', () => {
		it('should not throw when objects are deep equal', () => {
			const expect = new Expectation({ name: 'Object', value: 1 });

			expect.toEqual({ name: 'Object', value: 1 });
		});

		it('should throw when objects are different', () => {
			const expect = new Expectation({ name: 'Object', value: 1 });

			throwsError(() => expect.toEqual({ name: 'Object', value: 2 }));
		});
	});

	describe('toNotEqual', () => {
		it('should not throw when objects are different', () => {
			const expect = new Expectation({ name: 'Object', value: 1 });

			expect.toNotEqual({ name: 'Object', value: '1' });
		});

		it('should throw when objects are deep equal', () => {
			const expect = new Expectation({ name: 'Object', value: 1 });

			throwsError(() => expect.toNotEqual({ name: 'Object', value: 1 }));
		});
	});
});