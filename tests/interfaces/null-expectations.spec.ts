import expect from '../../src/index';

describe('expect(null)', () => {
    describe('toExist', () => {
        it('throws', () => {
            expect(() => expect(null).toExist()).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(null).toExist(null as any)).toThrow();
        });
    });

    describe('toNotExist', () => {
        it('does not throw', () => {
            expect(null).toNotExist();
        });

        it('is chainable', () => {
            expect(null).toNotExist().toNotExist();
        });
    });

    describe('toBe', () => {
        it('does not throw when assertion passes', () => {
            expect(null).toBe(null);
        });

        it('throws when assertion fails', () => {
            expect(() => expect(null).toBe(1 as any)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(null).toBe(null, null as any)).toThrow();
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
            expect(() => expect(null).toNotBe(null)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(null).toNotBe(1 as any, null as any)).toThrow();
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
            expect(() => expect(null).toEqual(1 as any)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(null).toEqual(null, null as any)).toThrow();
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
            expect(() => expect(null).toNotEqual(null)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(null).toNotEqual(1 as any, null as any)).toThrow();
        });

        it('is chainable', () => {
            expect(null).toNotEqual(1 as any).toNotEqual(1 as any);
        });
    });
});
