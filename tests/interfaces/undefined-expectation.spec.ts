import { checkThrows } from '../helpers';
import expect from '../../src/index';

describe('expect(undefined)', () => {
    describe('toExist', () => {
        it('throws', () => {
            checkThrows(() => expect(undefined).toExist());
        });
    });

    describe('toNotExist', () => {
        it('does not throw', () => {
            expect(undefined).toNotExist();
        });

        it('is chainable', () => {
            expect(undefined).toNotExist().toNotExist();
        });
    });

    describe('toBe', () => {
        it('does not throw when assertion passes', () => {
            expect(undefined).toBe(undefined);
        });

        it('throws when assertion fails', () => {
            checkThrows(() => expect(undefined).toBe(1 as any));
        });

        it('is chainable', () => {
            expect(undefined).toBe(undefined).toBe(undefined);
        });
    });

    describe('toNotBe', () => {
        it('does not throw when assertion passes', () => {
            expect(undefined).toNotBe(1 as any);
        });

        it('throws when assertion fails', () => {
            checkThrows(() => expect(undefined).toNotBe(undefined));
        });

        it('is chainable', () => {
            expect(undefined).toNotBe(1 as any).toNotBe(1 as any);
        });
    });

    describe('toEqual', () => {
        it('does not throw when assertion passes', () => {
            expect(undefined).toEqual(undefined);
        });

        it('throws when assertion fails', () => {
            checkThrows(() => expect(undefined).toEqual(1 as any));
        });

        it('is chainable', () => {
            expect(undefined).toEqual(undefined).toEqual(undefined);
        });
    });

    describe('toNotEqual', () => {
        it('does not throw when assertion passes', () => {
            expect(undefined).toNotEqual(1 as any);
        });

        it('throws when assertion fails', () => {
            checkThrows(() => expect(undefined).toNotEqual(undefined));
        });

        it('is chainable', () => {
            expect(undefined).toNotEqual(1 as any).toNotEqual(1 as any);
        });
    });
});
