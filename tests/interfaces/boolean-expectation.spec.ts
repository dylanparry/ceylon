import expect from '../../src/index';

describe('expect(boolean)', () => {
    describe('toExist', () => {
        it('does not throw', () => {
            expect(true).toExist();
            expect(false).toExist();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(true).toExist(null as any)).toThrow();
        });

        it('is chainable', () => {
            expect(true).toExist().toExist();
        });
    });

    describe('toNotExist', () => {
        it('throws', () => {
            expect(() => expect(true).toNotExist()).toThrow();
            expect(() => expect(false).toNotExist()).toThrow();
        });
    });

    describe('toBe', () => {
        it('does not throw when assertion passes', () => {
            expect(true).toBe(true);
            expect(false).toBe(false);
        });

        it('throws when assertion fails', () => {
            expect(() => expect(true).toBe(false)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(true).toBe(true, null as any)).toThrow();
        });

        it('is chainable', () => {
            expect(true).toBe(true).toBe(true);
        });
    });

    describe('toNotBe', () => {
        it('does not throw when assertion passes', () => {
            expect(true).toNotBe(false);
        });

        it('throws when assertion fails', () => {
            expect(() =>  expect(true).toNotBe(true)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(true).toNotBe(false, null as any)).toThrow();
        });

        it('is chainable', () => {
            expect(true).toNotBe(false).toNotBe(false);
        });
    });

    describe('toEqual', () => {
        it('does not throw when assertion passes', () => {
            expect(true).toEqual(true);
        });

        it('throws when assertion fails', () => {
            expect(() => expect(true).toEqual(false)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(true).toEqual(true, null as any)).toThrow();
        });

        it('is chainable', () => {
            expect(true).toEqual(true).toEqual(true);
        });
    });

    describe('toNotEqual', () => {
        it('does not throw when assertion passes', () => {
            expect(true).toNotEqual(false);
        });

        it('throws when assertion fails', () => {
            expect(() => expect(true).toNotEqual(true)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(true).toNotEqual(false, null as any)).toThrow();
        });

        it('is chainable', () => {
            expect(true).toNotEqual(false).toNotEqual(false);
        });
    });

    describe('toBeA / toBeAn', () => {
        it('does not throw when assertion passes', () => {
            expect(true).toBeA('boolean');
            expect(true).toBeAn('boolean');
        });

        it('throws when assertion fails', () => {
            expect(() => expect(true).toBeA('number')).toThrow();
            expect(() => expect(true).toBeAn('number')).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(true).toBeA(null as any)).toThrow();
            expect(() => expect(true).toBeAn(null as any)).toThrow();

            expect(() => expect(true).toBeA('boolean', null as any)).toThrow();
            expect(() => expect(true).toBeAn('boolean', null as any)).toThrow();
        });

        it('is chainable', () => {
            expect(true).toBeA('boolean').toBeA('boolean');
        });
    });

    describe('toNotBeA / toNotBeAn', () => {
        it('does not throw when assertion passes', () => {
            expect(true).toNotBeA('number');
            expect(true).toNotBeAn('number');
        });

        it('throws when assertion fails', () => {
            expect(() => expect(true).toNotBeA('boolean')).toThrow();
            expect(() => expect(true).toNotBeAn('boolean')).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(true).toNotBeA(null as any)).toThrow();
            expect(() => expect(true).toNotBeAn(null as any)).toThrow();

            expect(() => expect(true).toNotBeA('number', null as any)).toThrow();
            expect(() => expect(true).toNotBeAn('number', null as any)).toThrow();
        });

        it('is chainable', () => {
            expect(true).toNotBeA('number').toNotBeA('number');
        });
    });

    describe('toBeTrue', () => {
        it('does not throw when assertion passes', () => {
            expect(true).toBeTrue();
        });

        it('throws when assertion fails', () => {
            expect(() => expect(false).toBeTrue()).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(true).toBeTrue(null as any)).toThrow();
        });

        it('throws when called on a non-boolean', () => {
            expect(() => expect(undefined)['toBeTrue']()).toThrow();
        });

        it('is chainable', () => {
            expect(true).toBeTrue().toBeTrue();
        });
    });

    describe('toBeFalse', () => {
        it('does not throw when assertion passes', () => {
            expect(false).toBeFalse();
        });

        it('throws when assertion fails', () => {
            expect(() => expect(true).toBeFalse()).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(true).toBeFalse(null as any)).toThrow();
        });

        it('throws when called on a non-boolean', () => {
            expect(() => expect(undefined)['toBeFalse']()).toThrow();
        });

        it('is chainable', () => {
            expect(false).toBeFalse().toBeFalse();
        });
    });
});
