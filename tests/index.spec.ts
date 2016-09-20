import expect from '../src';
import ArrayExpectation from '../src/expectations/array-expectation';
import BooleanExpectation from '../src/expectations/boolean-expectation';
import FunctionExpectation from '../src/expectations/function-expectation';
import NumberExpectation from '../src/expectations/number-expectation';
import StringExpectation from '../src/expectations/string-expectation';
import ObjectExpectation from '../src/expectations/object-expectation';

const checkType = (sut: Object, expected: Function, message: string): void => {
	if (sut instanceof expected === false) {
		throw new Error(message);
	}
}

describe('expect', () => {
	it('should return a new ArrayExpectation object when passed an array', () => {
		const sut = expect([1, 2, 3]);

		checkType(sut, ArrayExpectation, 'Expected a new ArrayExpectation object');
	});

	it('should return a new BooleanExpectation object when passed a boolean', () => {
		const sut = expect(true);

		checkType(sut, BooleanExpectation, 'Expected a new BooleanExpectation object');
	});

	it('should return a new FunctionExpectation object when passed a function', () => {
		const sut = expect(() => { });

		checkType(sut, FunctionExpectation, 'Expected a new FunctionExpectation object');
	});

	it('should return a new NumberExpection object when passed a string', () => {
		const sut = expect(100);

		checkType(sut, NumberExpectation, 'Expected a new NumberExpectation object');
	});

	it('should return a new StringExpection object when passed a string', () => {
		const sut = expect('test');

		checkType(sut, StringExpectation, 'Expected a new StringExpectation object');
	});

	it('should return a new ObjectExpectation object when passed an object', () => {
		const sut = expect({ value: 1 });

		checkType(sut, ObjectExpectation, 'Expected a new ObjectExpectation object');
	});

	it('should return a new ObjectExpectation when passed an undefined value', () => {
		const sut = expect(undefined);

		checkType(sut, ObjectExpectation, 'Expected a new ObjectExpectation object');
	}); 
});