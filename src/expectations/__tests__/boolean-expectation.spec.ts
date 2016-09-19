import Expectation from '../boolean-expectation';

describe('BooleanExpectation', () => {
	describe('toBe()', () => {
		it('should not throw an error when boolean values match', () => {
			const expect = new Expectation(true);

			expect.toBe(true);
		});

		it('should throw an error when boolean values do not match', () => {
			const expect = new Expectation(true);

			let threwAnError = false;

			try {
				expect.toBe(false);
			}
			catch (e) {
				threwAnError = true;
			}

			if (!threwAnError) {
				throw new Error('Expected an error to be thrown');
			}
		});
	});

	describe('toNotBe()', () => {
		it('should not throw an error when boolean values do not match', () => {
			const expect = new Expectation(true);

			expect.toNotBe(false);
		});

		it('should throw an error when boolean values match', () => {
			const expect = new Expectation(true);

			let threwAnError = false;

			try {
				expect.toNotBe(true);
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
