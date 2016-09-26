import { checkThrows } from '../helpers';

import expect from '../../src/index';

describe('expect(null)', () => {
    describe('toExist', () => {
        it('does not throw', () => {
            expect(null).toExist();
        });

        it('is chainable', () => {
            expect(null).toExist().toExist();
        });
    });

    describe('toNotExist', () => {
        it('throws', () => {
            checkThrows(() => expect(null).toNotExist());
        });
    });

    describe('toBe', () => {
        it('does not throw when assertion passes', () => {
            expect(null).toBe(null);
        });

        it('throws when assertion fails', () => {
            checkThrows(() => expect(null).toBe(1 as any));
        });

        it('is chainable', () => {
            expect(null).toBe(null).toBe(null);
        });
    });

    describe('toNotBe', () => {
        it('does not throw when assertion passes', () => {
            expect(null).toNotBe(1 as any);
        });

        it('throws when assertion fails', () => {
            checkThrows(() => expect(null).toNotBe(null));
        });

        it('is chainable', () => {
            expect(null).toNotBe(1 as any).toNotBe(1 as any);
        });
    });

    describe('toEqual', () => {
        it('does not throw when assertion passes', () => {
            expect(null).toEqual(null);
        });

        it('throws when assertion fails', () => {
            checkThrows(() => expect(null).toEqual(1 as any));
        });

        it('is chainable', () => {
            expect(null).toEqual(null).toEqual(null);
        });
    });

    describe('toNotEqual', () => {
        it('does not throw when assertion passes', () => {
            expect(null).toNotEqual(1 as any);
        });

        it('throws when assertion fails', () => {
            checkThrows(() => expect(null).toNotEqual(null));
        });

        it('is chainable', () => {
            expect(null).toNotEqual(1 as any).toNotEqual(1 as any);
        });
    });
});
