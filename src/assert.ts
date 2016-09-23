import AssertionError from './assertion-error';

export interface IAssertOptions {
	assertion: boolean;
	message: string;
	actual?: any;
	expected?: any;
}

const assert = ({ assertion, message, actual, expected }: IAssertOptions): void => {
	if (!assertion) {
		const error = AssertionError({
			actual,
			expected,
			message,
			showDiff: typeof actual !== 'undefined' && typeof expected !== 'undefined',
		});

		throw error;
	}
};

export default assert;
