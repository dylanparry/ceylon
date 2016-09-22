const functionName = (func: Function) => {
	const result = /^function\s+([\w\$]+)\s*\(/.exec(func.toString());

	return result ? result[1] : '';
};

export const checkThrows = (func: Function): void => {
	let threw = false;

	try {
		func();
	}
	catch (e) {
		if (e.name !== 'AssertionError') {
			throw new TypeError('Thrown error is not an AssertionError');
		}

		threw = true;
	}

	if (!threw) {
		throw new Error('Expected an error to be thrown');
	}
};

export const checkExists = <T>(sut: T): void => {
	if (typeof sut === 'undefined') {
		throw new Error('Object does not exist');
	}
};

export const checkType = <T>(sut: T, expected: Function): void => {
	if (sut instanceof expected === false) {
		throw new Error(`Expected object to be an instance of ${functionName(expected)}`);
	}
};

export const checkEqual = <T>(sut: T, expected: T): void => {
	if (sut !== expected) {
		throw new Error('Objects are not equal');
	}
};
