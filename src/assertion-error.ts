export default function ({ message, expected, actual, showDiff }: {
	message: string;
	expected?: Object;
	actual?: Object;
	showDiff?: boolean;
}): Error {
	const error = new Error(message);

	// Properties used by Mocha and other frameworks to show errors
	error['expected'] = expected;
	error['actual'] = actual;
	error['showDiff'] = showDiff;

	// Set the error name to an AssertionError
	error.name = 'AssertionError';

	return error;
}
