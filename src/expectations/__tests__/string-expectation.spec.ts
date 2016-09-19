import Expectation from '../string-expectation';

describe('StringExpectation', () => {
	describe('toBe()', () => {
		it('should not throw an error when strings match', () => {
			const expect = new Expectation('string');

			expect.toBe('string');
		});

		it('should throw an error when strings do not match', () => {
			const expect = new Expectation('string');

			let threwAnError = false;

			try {
				expect.toBe('not the same');
			}
			catch (e) {
				threwAnError = true;
			}

			if (!threwAnError) {
				throw new Error('Expected an error to be thrown');
			}
		});
	});
});