import { throwsError } from '../helpers';
import Expectation from '../../src/expectations/object-expectation';

const objects: Object[] = [
	{},
	{ name: 'Object' },
	null,
];

describe('ObjectExpectation', () => {
	describe('toBe()', () => {
		it('should not throw when objects are the same object', () => {
			const sut = { value: 1 };
			const object = sut;

			const expect = new Expectation(sut);

			expect.toBe(object);
		});

		it('should throw when objects are different objects', () => {
			const sut = { value: 1 };
			const object = { value: 1 };

			const expect = new Expectation(sut);

			throwsError(() => expect.toBe(object));
		});

		it('should be chainable', () => {
			const sut = { value: 1 };
			const object = sut;

			const expect = new Expectation(sut);

			expect.toBe(object).toBe(object);
		});
	});

	describe('toNotBe()', () => {
		it('should not throw when objects are different objects', () => {
			const sut = { value: 1 };
			const object = { value: 1 };

			const expect = new Expectation(sut);

			expect.toNotBe(object);
		});

		it('should throw when objects are the same object', () => {
			const sut = { value: 1 };
			const object = sut;

			const expect = new Expectation(sut);

			throwsError(() => expect.toNotBe(object));
		});

		it('should be chainable', () => {
			const sut = { value: 1 };
			const object = { value: 1 };

			const expect = new Expectation(sut);

			expect.toNotBe(object).toNotBe(object);
		});
	});

	describe('toExist', () => {
		objects.forEach((sut: Object) => {
			it(`should not throw when object is ${JSON.stringify(sut)}`, () => {
				const expect = new Expectation(sut);

				expect.toExist();
			});
		});

		it('should throw when object is undefined', () => {
			let sut: Object;
			const expect = new Expectation(sut);

			throwsError(() => expect.toExist());
		});

		it('should be chainable', () => {
			const expect = new Expectation({});

			expect.toExist().toExist();
		});
	});

	describe('toNotExist', () => {
		it('should not throw when object is undefined', () => {
			let sut: Object;
			const expect = new Expectation(sut);

			expect.toNotExist();
		});

		objects.forEach((sut: Object) => {
			it(`should throw when object is ${JSON.stringify(sut)}`, () => {
				const expect = new Expectation(sut);

				throwsError(() => expect.toNotExist());
			});
		});

		it('should be chainable', () => {
			let sut: Object;

			const expect = new Expectation(sut);

			expect.toNotExist().toNotExist();
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

		it('should be chainable', () => {
			const expect = new Expectation({ name: 'Object', value: 1 });

			expect.toEqual({ name: 'Object', value: 1 }).toEqual({ name: 'Object', value: 1 });
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

		it('should be chainable', () => {
			const expect = new Expectation({ name: 'Object', value: 1 });

			expect.toNotEqual({ name: 'Object' }).toNotEqual({ name: 'Object' });
		});
	});
});
