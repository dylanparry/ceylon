import Expectation from '../function-expectation';

describe('FunctionExpectation', () => {
	describe('toBe()', () => {
		it('should not throw an error when boolean values match', () => {
			const actual = () => { };
			const expected = actual;

			const expect = new Expectation(actual);

			expect.toBe(expected);
		});

		it('should throw an error when boolean values do not match', () => {
			const actual = () => { };
			const expected = () => { };

			const expect = new Expectation(actual);

			let threwAnError = false;

			try {
				expect.toBe(expected);
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
