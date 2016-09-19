import expect from '../';
import Expectation from '../expectation';

describe('expect', () => {
	it('should return a new Expection object', () => {
		const sut = expect("test");

		// Since we're not using another assertion library, we'll have to do this one test manually
		if (sut instanceof Expectation === false) {
			const error = new Error('expect should return a new Expectation object');
			error['actual'] = sut.constructor.name;
			error['expected'] = 'Expectation';
			error['showDiff'] = true;

			throw error;
		}
	});
});