import { checkThrows, checkEqual }  from './helpers';

import assert from '../src/assert';

describe('Assert', () => {
	it('does not throw when assertion passes', () => {
		assert({
			assertion: true,
			message: 'This should not throw',
		});
	});

	it('throws when the assertion fails', () => {
		checkThrows(() => assert({
			assertion: false,
			message: 'This should throw',
		}));
	});

	it('throws error with correct message property', () => {
		try {
			assert({
				assertion: false,
				message: 'This should throw',
			});
		}
		catch (e) {
			checkEqual(e.message, 'This should throw');
		}
	});

	it('throws error with showDiff set to false', () => {
		try {
			assert({
				assertion: false,
				message: 'This should throw',
			});
		}
		catch (e) {
			checkEqual(e['showDiff'], false);
		}
	});

	it('throws error with correct actual/expected/showDiff properties', () => {
		try {
			assert({
				actual: 1,
				assertion: false,
				expected: 2,
				message: 'This should throw',
			});
		}
		catch (e) {
			checkEqual(e['actual'], 1);
			checkEqual(e['expected'], 2);
			checkEqual(e['showDiff'], true);
		}
	});
});
