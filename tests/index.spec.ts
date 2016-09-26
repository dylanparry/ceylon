import { checkExists, checkType } from './helpers';

import expect from '../src/index';
import Expectation from '../src/expectation';

describe('expect', () => {
    it('creates a new Expectation object', () => {
        const sut = expect(true);

        checkExists(sut);
        checkType(sut, Expectation);
    });
});
