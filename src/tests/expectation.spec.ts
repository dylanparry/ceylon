import Expectation from '../expectation';

describe('Expectation', () => {
	describe('Expectation<string>', () => {
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
				catch(e) {
					threwAnError = true;
				}

				if (!threwAnError) {
					throw new Error('Expected an error to be thrown');
				}
			});
		});
	});

	describe('Expectation<number>', () => {
		describe('toBe()', () => {
			it('should not throw an error when numbers match', () => {
				const expect = new Expectation(100);

				expect.toBe(100);
			});

			it('should throw an error when numbers do not match', () => {
				const expect = new Expectation(100);

				let threwAnError = false;

				try {
					expect.toBe(99);
				}
				catch(e) {
					threwAnError = true;
				}

				if (!threwAnError) {
					throw new Error('Expected an error to be thrown');
				}
			});
		});
	});

	describe('Expectation<boolean>', () => {
		describe('toBe()', () => {
			it('should not throw an error when booleans match', () => {
				const expect = new Expectation(true);

				expect.toBe(true);
			});

			it('should throw an error when strings do not match', () => {
				const expect = new Expectation(true);

				let threwAnError = false;

				try {
					expect.toBe(false);
				}
				catch(e) {
					threwAnError = true;
				}

				if (!threwAnError) {
					throw new Error('Expected an error to be thrown');
				}
			});
		});
	});

	describe('Expectation<Array>', () => {
		describe('toBe()', () => {
			it('should not throw an error when arrays have the same reference', () => {
				const sut = [1,2,3];

				const expect = new Expectation(sut);

				expect.toBe(sut);
			});

			it('should throw an error when arrays do not have the same reference', () => {
				const sut = [1,2,3];

				const expect = new Expectation(sut);

				let threwAnError = false;

				try {
					expect.toBe([1,2,3]);
				}
				catch(e) {
					threwAnError = true;
				}

				if (!threwAnError) {
					throw new Error('Expected an error to be thrown');
				}
			});
		});
	});

	describe('Expectation<Object>', () => {
		it('should not throw an error when objects have the same reference', () => {
				const sut = {
					name: 'Test',
					value: 1,
				};

				const expect = new Expectation(sut);

				expect.toBe(sut);
			});

			it('should throw an error when objects do not have the same reference', () => {
				const sut = {
					name: 'Test',
					value: 1,
				};
				const expect = new Expectation(sut);

				let threwAnError = false;

				try {
					expect.toBe({
						name: 'Test',
						value: 1,
					});
				}
				catch(e) {
					threwAnError = true;
				}

				if (!threwAnError) {
					throw new Error('Expected an error to be thrown');
				}
			});
	});

	describe('Expectation<Function>', () => {

	});
});