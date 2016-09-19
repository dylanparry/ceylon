import Expectation from './expectation';

/**
 * Create a new Expectation
 *
 * @param sut The system under test
 */
export default function <T>(sut: T) {
	return new Expectation(sut);
};
