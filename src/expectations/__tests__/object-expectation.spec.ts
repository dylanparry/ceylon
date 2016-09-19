import Expectation from '../object-expectation';

describe('ObjectExpectation', () => {
	describe('toBe()', () => {
		it('should not throw an error when objects share the same reference', () => {
			const actual = { value: 1 };
			const expected = actual;

			const expect = new Expectation(actual);

			expect.toBe(expected);
		});

		it('should throw an error when strings do share the same reference', () => {
			const actual = { value: 1 };   // Two different objects
			const expected = { value: 1 }; // containing the same values

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

	describe('toExist', () => {
		it('should not throw an error when the object exists', () => {
			const expect = new Expectation({});

			expect.toExist();
		});

		it('should throw an error when the object is undefined', () => {
			const expect = new Expectation(undefined);

			let threwAnError = false;

			try {
				expect.toExist()
			}
			catch (e) {
				threwAnError = true;
			}

			if (!threwAnError) {
				throw new Error('Expected an error to be thrown');
			}
		});
	});

	describe('toNotExist', () => {
		it('should not throw an error when the object is undefined', () => {
			const expect = new Expectation(undefined);

			expect.toNotExist();
		});

		it('should throw an error when the object is undefined', () => {
			const expect = new Expectation({});

			let threwAnError = false;

			try {
				expect.toNotExist()
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