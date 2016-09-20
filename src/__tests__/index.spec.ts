import expect from '../';
import ArrayExpectation from '../expectations/array-expectation';
import BooleanExpectation from '../expectations/boolean-expectation';
import FunctionExpectation from '../expectations/function-expectation';
import NumberExpectation from '../expectations/number-expectation';
import StringExpectation from '../expectations/string-expectation';
import ObjectExpectation from '../expectations/object-expectation';

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

	it('should return undefined when passed an unsupported object', () => {
		const sut = expect(undefined);

		if (typeof sut !== 'undefined') {
			throw new Error('expected undefined');
		}
	}); 
});