import ArrayExpectation from './expectations/array-expectation';
import BooleanExpectation from './expectations/boolean-expectation';
import NumberExpectation from './expectations/number-expectation';
import ObjectExpectation from './expectations/object-expectation';
import StringExpectation from './expectations/string-expectation';

type IExpectParameterTypes = Array<any> | boolean | number | string | Object;
type IExpectationReturnTypes = ArrayExpectation | BooleanExpectation | NumberExpectation | StringExpectation | ObjectExpectation;

/**
 * Create a new Expectation
 *
 * @param sut The system under test
 */
function expect(sut: Array<any>): ArrayExpectation;
function expect(sut: boolean): BooleanExpectation;
function expect(sut: number): NumberExpectation;
function expect(sut: string): StringExpectation;
function expect(sut: Object): ObjectExpectation;

function expect(sut: IExpectParameterTypes): IExpectationReturnTypes {
	// Check for Array
	if (sut instanceof Array) {
		return new ArrayExpectation(sut);
	}

	// Check for Boolean
	if (typeof sut === 'boolean') {
		return new BooleanExpectation(sut);
	}

	// Check for Number
	if (typeof sut === 'number') {
		return new NumberExpectation(sut);
	}

	// Check for String
	if (typeof sut === 'string') {
		return new StringExpectation(sut);
	}

	// Lastly check for Object, important this is last!
	if (typeof sut === 'object') {
		return new ObjectExpectation(sut);
	}

	return undefined;
};

export default expect;
