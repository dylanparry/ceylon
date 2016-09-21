import { throwsError } from '../helpers';
import Expectation from '../../src/expectations/array-expectation';

const arrays: number[][] = [
	[1, 2, 3],
	[],
	null,
];

describe('ArrayExpectation', () => {
	describe('toBe()', () => {
		it('should not throw when arrays are the same object', () => {
			const sut = [1, 2, 3];
			const array = sut;

			const expect = new Expectation(sut);

			expect.toBe(array);
		});

		it('should throw when arrays are different objects', () => {
			const sut = [1, 2, 3];
			const array = [1, 2, 3];

			const expect = new Expectation(sut);

			throwsError(() => expect.toBe(array));
		});

		it('should be chainable', () => {
			const sut = [1, 2, 3];
			const array = sut;

			const expect = new Expectation(sut);

			expect.toBe(array).toBe(array);
		});
	});

	describe('toNotBe()', () => {
		it('should throw when arrays are the same object', () => {
			const sut = [1, 2, 3];
			const array = sut;

			const expect = new Expectation(sut);

			throwsError(() => expect.toNotBe(array));
		});

		it('should not throw when arrays are the different objects', () => {
			const sut = [1, 2, 3];
			const array = [1, 2, 3];

			const expect = new Expectation(sut);

			expect.toNotBe(array);
		});

		it('should be chainable', () => {
			const sut = [1, 2, 3];
			const array = [1, 2, 3];

			const expect = new Expectation(sut);

			expect.toNotBe(array).toNotBe(array);
		});
	});

	describe('toExist', () => {
		arrays.forEach((array: number[]) => {
			it(`should not throw when array is ${JSON.stringify(array)}`, () => {
				const expect = new Expectation(array);

				expect.toExist();
			});
		});

		it('should throw when array is undefined', () => {
			let array: number[];
			const expect = new Expectation(array);

			throwsError(() => expect.toExist());
		});

		it('should be chainable', () => {
			const sut = [1, 2, 3];

			const expect = new Expectation(sut);

			expect.toExist().toExist();
		});
	});

	describe('toNotExist', () => {
		it('should not throw when array is undefined', () => {
			let array: number[];
			const expect = new Expectation(array);

			expect.toNotExist();
		});

		arrays.forEach((array: number[]) => {
			it(`should throw array is ${JSON.stringify(array)}`, () => {
				const expect = new Expectation(array);

				throwsError(() => expect.toNotExist());
			});
		});

		it('should be chainable', () => {
			let array: number[];

			const expect = new Expectation(array);

			expect.toNotExist().toNotExist();
		});
	});

	describe('toEqual', () => {
		it('should not throw when arrays are deep equal', () => {
			const expect = new Expectation([1, 2, 3]);

			expect.toEqual([1, 2, 3]);
		});

		it('should throw when arrays are different', () => {
			const expect = new Expectation([1, 2, 3]);

			throwsError(() => expect.toEqual([1, 2, 3, 4]));
		});

		it('should be chainable', () => {
			const expect = new Expectation([1, 2, 3]);

			expect.toEqual([1, 2, 3]).toEqual([1, 2, 3]);
		});
	});

	describe('toNotEqual', () => {
		it('should not throw when arrays are different', () => {
			const expect = new Expectation([1, 2, 3]);

			expect.toNotEqual([1, 2, 3, 4]);
		});

		it('should throw when arrays are deep equal', () => {
			const expect = new Expectation([1, 2, 3]);

			throwsError(() => expect.toNotEqual([1, 2, 3]));
		});

		it('should be chainable', () => {
			const expect = new Expectation([1, 2, 3]);

			expect.toNotEqual([1, 2, 3, 4]).toNotEqual([1, 2, 3, 4]);
		});
	});

	describe('toBeA / toBeAn', () => {
		it('should not throw when type is an object', () => {
			const expect = new Expectation([1, 2, 3]);

			expect.toBeA('object');
			expect.toBeAn('object');
		});

		it('should throw when type is not an object', () => {
			const expect = new Expectation([1, 2, 3]);

			throwsError(() => expect.toBeA('string'));
			throwsError(() => expect.toBeAn('string'));
		});

		it('should not throw an error when constructor is of type', () => {
			const sut = [1, 2, 3];
			const expect = new Expectation(sut);

			expect.toBeA(Array);
			expect.toBeAn(Array);
		});

		it('should throw an error when constructor is not of type', () => {
			const sut = [1, 2, 3];
			const expect = new Expectation(sut);

			throwsError(() => expect.toBeA(Function));
			throwsError(() => expect.toBeAn(Error));
		});

		it('should be chainable', () => {
			const expect = new Expectation([1, 2, 3]);

			expect.toBeA('object').toBeA('object');
			expect.toBeAn('object').toBeAn('object');
		});
	});

	describe('toNotBeA / toNotBeAn', () => {
		it('should not throw when type is not an object', () => {
			const expect = new Expectation([1, 2, 3]);

			expect.toNotBeA('string');
			expect.toNotBeAn('string');
		});

		it('should throw when type is an object', () => {
			const expect = new Expectation([1, 2, 3]);

			throwsError(() => expect.toNotBeA('object'));
			throwsError(() => expect.toNotBeAn('object'));
		});

		it('should not throw an error when constructor is not of type', () => {
			const sut = [1, 2, 3];
			const expect = new Expectation(sut);

			expect.toNotBeA(TypeError);
			expect.toNotBeAn(EvalError);
		});

		it('should throw an error when constructor is of type', () => {
			const sut = [1, 2, 3];
			const expect = new Expectation(sut);

			throwsError(() => expect.toNotBeA(Array));
			throwsError(() => expect.toNotBeAn(Array));
		});

		it('should be chainable', () => {
			const expect = new Expectation([1, 2, 3]);

			expect.toNotBeA('string').toNotBeA('string');
			expect.toNotBeAn('string').toNotBeAn('string');
		});
	});
});
