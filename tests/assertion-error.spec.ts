import { checkExists, checkType, checkEqual } from './helpers';

import AssertionError from '../src/assertion-error';

describe('AssertionError', () => {
	it('returns an Error object', () => {
		const error = AssertionError({
			message: 'Error message',
		});

		checkExists(error);
		checkType(error, Error);
	});

	it('sets the error.message property', () => {
		const error = AssertionError({
			message: 'Error message',
		});

		checkEqual(error.message, 'Error message');
	});

	it('sets does not set the actual, expected, or showDiff properties when unspecified', () => {
		const error = AssertionError({
			message: 'Error message',
		});

		checkEqual(error['actual'], undefined);
		checkEqual(error['expected'], undefined);
		checkEqual(error['showDiff'], undefined);
	});

	it('sets the actual, expected, and showDiff properties when specified', () => {
		const error = AssertionError({
			actual: 'I ate an apple',
			expected: 'I ate an orange',
			message: 'Error message',
			showDiff: true,
		});

		checkEqual(error['actual'], 'I ate an apple');
		checkEqual(error['expected'], 'I ate an orange');
		checkEqual(error['showDiff'], true);
	});
});
