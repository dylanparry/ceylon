import expect from '../src/index';
import Expectation from '../src/expectation';

describe('expect', () => {
    it('creates a new Expectation object', () => {
        const sut = expect(true);

        expect(sut).toExist();
        expect(sut).toBeAn(Expectation);
    });
});
