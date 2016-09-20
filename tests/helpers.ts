export const throwsError = (func: Function): void => {
	let threw = false;

	try {
		func();
	}
	catch (e) {
		threw = true;
	}

	if (!threw) {
		throw new Error('Expected an error to be thrown');
	}
};

export const checkType = (sut: Object, expected: Function, message: string): void => {
	if (sut instanceof expected === false) {
		throw new Error(message);
	}
};
