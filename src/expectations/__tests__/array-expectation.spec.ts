import Expectation from '../array-expectation';

describe('ArrayExpectation', () => {
	describe('toBe()', () => {
		it('should not throw an error when arrays do not share the same reference', () => {
			const actual = [1, 2, 3];   // Two different arrays
			const expected = [1, 2, 3]; // containing the same values

			const expect = new Expectation(actual);

			expect.toNotBe(expected);
		});

		it('should throw an error when arrays share the same reference', () => {
			const actual = [1, 2, 3];
			const expected = actual;

			const expect = new Expectation(actual);

			let threwAnError = false;

			try {
				expect.toNotBe(expected);
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
		it('should throw an error when arrays share the same reference', () => {
			const actual = [1, 2, 3];
			const expected = actual;

			const expect = new Expectation(actual);

			let threwAnError = false;

			try {
				expect.toNotBe(expected);
			}
			catch (e) {
				threwAnError = true;
			}

			if (!threwAnError) {
				throw new Error('Expected an error to be thrown');
			}
		});

		it('should not throw an error when array do not share the same reference', () => {
			const actual = [1, 2, 3];   // Two different arrays
			const expected = [1, 2, 3]; // containing the same values

			const expect = new Expectation(actual);

			expect.toNotBe(expected);
		});
	});
});