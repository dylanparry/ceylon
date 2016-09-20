import expect from '../src';
import { checkType } from './helpers';

import ArrayExpectation from '../src/expectations/array-expectation';
import BooleanExpectation from '../src/expectations/boolean-expectation';
import FunctionExpectation from '../src/expectations/function-expectation';
import NumberExpectation from '../src/expectations/number-expectation';
import StringExpectation from '../src/expectations/string-expectation';
import ObjectExpectation from '../src/expectations/object-expectation';

type IDataType = number[] | boolean | number | string | Function | Object;

interface IExpectationTest {
	data: IDataType;
	expected: any; // tslint:disable-line
}

const tests: IExpectationTest[] = [
	{
		data: [1, 2, 3],
		expected: ArrayExpectation,
	},
	{
		data: true,
		expected: BooleanExpectation,
	},
	{
		data: Math.random,
		expected: FunctionExpectation,
	},
	{
		data: 100,
		expected: NumberExpectation,
	},
	{
		data: 'string',
		expected: StringExpectation,
	},
	{
		data: { name: 'Object' },
		expected: ObjectExpectation,
	},
	{
		data: undefined,
		expected: ObjectExpectation,
	},
];

describe('expect', () => {
	tests.forEach(({data, expected}: IExpectationTest) => {
		const dataType = data instanceof Array ? 'array' : typeof data;

		it(`should create ${expected.name} when passed ${dataType}`, () => {
			const sut = expect(data);

			checkType(sut, expected, `Expected ${expected.name}`);
		});
	});
});
