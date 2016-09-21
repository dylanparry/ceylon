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

	describe('toBeA / toBeAn', () => {
		it('should not throw when type is an object', () => {
			const expect = new Expectation({ name: 'Object' });

			expect.toBeA('object');
			expect.toBeAn('object');
		});

		it('should throw when type is not an object', () => {
			const expect = new Expectation({ name: 'Object' });

			throwsError(() => expect.toBeA('string'));
			throwsError(() => expect.toBeAn('string'));
		});

		it('should not throw an error when constructor is of type', () => {
			const sut = new Map();
			const expect = new Expectation(sut);

			expect.toBeA(Map);
			expect.toBeAn(Map);
		});

		it('should throw an error when constructor is not of type', () => {
			const sut = new Map;
			const expect = new Expectation(sut);

			throwsError(() => expect.toBeA(Function));
			throwsError(() => expect.toBeAn(Error));
		});

		it('should be chainable', () => {
			const expect = new Expectation({ name: 'Object' });

			expect.toBeA('object').toBeA('object');
			expect.toBeAn('object').toBeAn('object');
		});
	});

	describe('toNotBeA / toNotBeAn', () => {
		it('should not throw when type is not an object', () => {
			const expect = new Expectation({ name: 'Object' });

			expect.toNotBeA('string');
			expect.toNotBeAn('string');
		});

		it('should throw when type is an object', () => {
			const expect = new Expectation({ name: 'Object' });

			throwsError(() => expect.toNotBeA('object'));
			throwsError(() => expect.toNotBeAn('object'));
		});

		it('should not throw an error when constructor is not of type', () => {
			const sut = new Map();
			const expect = new Expectation(sut);

			expect.toNotBeA(Function);
			expect.toNotBeAn(Error);
		});

		it('should throw an error when constructor is of type', () => {
			const sut = new Map();
			const expect = new Expectation(sut);

			throwsError(() => expect.toNotBeA(Map));
			throwsError(() => expect.toNotBeAn(Map));
		});

		it('should be chainable', () => {
			const expect = new Expectation({ name: 'Object' });

			expect.toNotBeA('string').toNotBeA('string');
			expect.toNotBeAn('string').toNotBeAn('string');
		});
	});
});
