import Expectation from '../number-expectation';

describe('NumberExpectation', () => {
	describe('toBe()', () => {
		it('should not throw an error when numbers match', () => {
			const expect = new Expectation(100);

			expect.toBe(100);
		});

		it('should throw an error when numbers do not match', () => {
			const expect = new Expectation(100);

			let threwAnError = false;

			try {
				expect.toBe(90);
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