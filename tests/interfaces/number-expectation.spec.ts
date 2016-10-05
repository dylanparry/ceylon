import expect from '../../src/index';

describe('expect(number)', () => {
    describe('toExist', () => {
        it('does not throw', () => {
            expect(100).toExist();
            expect(-100).toExist();
            expect(0).toExist();
            expect(0.5).toExist();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(100).toExist(null as any)).toThrow();
        });

        it('is chainable', () => {
            expect(100).toExist().toExist();
        });
    });

    describe('toNotExist', () => {
        it('throws', () => {
            expect(() => expect(100).toNotExist()).toThrow();
            expect(() => expect(-100).toNotExist()).toThrow();
            expect(() => expect(0).toNotExist()).toThrow();
            expect(() => expect(0.5).toNotExist()).toThrow();
        });
    });

    describe('toBe', () => {
        it('does not throw when assertion passes', () => {
            expect(100).toBe(100);
        });

        it('throws when assertion fails', () => {
            expect(() => expect(100).toBe(50)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(100).toBe(100, null as any)).toThrow();
        });

        it('is chainable', () => {
            expect(100).toBe(100).toBe(100);
        });
    });

    describe('toNotBe', () => {
        it('does not throw when assertion passes', () => {
            expect(100).toNotBe(50);
        });

        it('throws when assertion fails', () => {
            expect(() => expect(100).toNotBe(100)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(100).toNotBe(90, null as any)).toThrow();
        });

        it('is chainable', () => {
            expect(100).toNotBe(50).toNotBe(50);
        });
    });

    describe('toEqual', () => {
        it('does not throw when assertion passes', () => {
            expect(100).toEqual(100);
        });

        it('throws when assertion fails', () => {
            expect(() => expect(100).toEqual(50)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(100).toEqual(100, null as any)).toThrow();
        });

        it('is chainable', () => {
            expect(100).toEqual(100).toEqual(100);
        });
    });

    describe('toNotEqual', () => {
        it('does not throw when assertion passes', () => {
            expect(100).toNotEqual(50);
        });

        it('throws when assertion fails', () => {
            expect(() => expect(100).toNotEqual(100)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(100).toNotEqual(50, null as any)).toThrow();
        });

        it('is chainable', () => {
            expect(100).toNotEqual(50).toNotEqual(50);
        });
    });

    describe('toBeA / toBeAn', () => {
        it('does not throw when assertion passes', () => {
            expect(100).toBeA('number');
            expect(100).toBeAn('number');
        });

        it('throws when assertion fails', () => {
            expect(() => expect(100).toBeA('boolean')).toThrow();
            expect(() => expect(100).toBeAn('boolean')).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(100).toBeA(null as any)).toThrow();
            expect(() => expect(100).toBeAn(null as any)).toThrow();

            expect(() => expect(100).toBeA('number', null as any)).toThrow();
            expect(() => expect(100).toBeAn('number', null as any)).toThrow();
        });

        it('is chainable', () => {
            expect(100).toBeA('number').toBeA('number');
        });
    });

    describe('toNotBeA / toNotBeAn', () => {
        it('does not throw when assertion passes', () => {
            expect(100).toNotBeA('boolean');
            expect(100).toNotBeAn('boolean');
        });

        it('throws when assertion fails', () => {
            expect(() => expect(100).toNotBeA('number')).toThrow();
            expect(() => expect(100).toNotBeAn('number')).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(100).toNotBeA(null as any)).toThrow();
            expect(() => expect(100).toNotBeAn(null as any)).toThrow();

            expect(() => expect(100).toNotBeA('string', null as any)).toThrow();
            expect(() => expect(100).toNotBeAn('string', null as any)).toThrow();
        });

        it('is chainable', () => {
            expect(100).toNotBeA('boolean').toNotBeA('boolean');
        });
    });

    describe('toBeLessThan / toBeFewerThan', () => {
        it('does not throw when assertion passes', () => {
            expect(100).toBeLessThan(200);
            expect(100).toBeFewerThan(200);
        });

        it('throws when assertion fails', () => {
            expect(() => expect(100).toBeLessThan(50)).toThrow();
            expect(() => expect(100).toBeLessThan(100)).toThrow();
            expect(() => expect(100).toBeFewerThan(50)).toThrow();
            expect(() => expect(100).toBeFewerThan(100)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(100).toBeLessThan(null as any)).toThrow();
            expect(() => expect(100).toBeFewerThan(null as any)).toThrow();

            expect(() => expect(100).toBeLessThan(200, null as any)).toThrow();
            expect(() => expect(100).toBeFewerThan(200, null as any)).toThrow();
        });

        it('throws when called on a non-number', () => {
            expect(() => expect(undefined)['toBeLessThan'](1)).toThrow();
            expect(() => expect(undefined)['toBeFewerThan'](1)).toThrow();
        });

        it('is chainable', () => {
            expect(100).toBeLessThan(200).toBeLessThan(200);
            expect(100).toBeFewerThan(200).toBeFewerThan(200);
        });
    });

    describe('toBeLessThanOrEqualTo / toBeFewerThanOrEqualTo', () => {
        it('does not throw when assertion passes', () => {
            expect(100).toBeLessThanOrEqualTo(200);
            expect(100).toBeLessThanOrEqualTo(100);
            expect(100).toBeFewerThanOrEqualTo(200);
            expect(100).toBeFewerThanOrEqualTo(100);
        });

        it('throws when assertion fails', () => {
            expect(() => expect(100).toBeLessThanOrEqualTo(50)).toThrow();
            expect(() => expect(100).toBeFewerThanOrEqualTo(50)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(100).toBeLessThanOrEqualTo(null as any)).toThrow();
            expect(() => expect(100).toBeLessThanOrEqualTo(null as any)).toThrow();

            expect(() => expect(100).toBeLessThanOrEqualTo(200, null as any)).toThrow();
            expect(() => expect(100).toBeLessThanOrEqualTo(200, null as any)).toThrow();
        });

        it('throws when called on a non-number', () => {
            expect(() => expect(undefined)['toBeLessThanOrEqualTo'](1)).toThrow();
            expect(() => expect(undefined)['toBeFewerThanOrEqualTo'](1)).toThrow();
        });

        it('is chainable', () => {
            expect(100).toBeLessThanOrEqualTo(200).toBeLessThanOrEqualTo(200);
            expect(100).toBeFewerThanOrEqualTo(200).toBeFewerThanOrEqualTo(200);
        });
    });

    describe('toBeGreaterThan / toBeMoreThan', () => {
        it('does not throw when assertion passes', () => {
            expect(200).toBeGreaterThan(100);
            expect(200).toBeMoreThan(100);
        });

        it('throws when assertion fails', () => {
            expect(() => expect(100).toBeGreaterThan(200)).toThrow();
            expect(() => expect(100).toBeGreaterThan(100)).toThrow();
            expect(() => expect(100).toBeMoreThan(200)).toThrow();
            expect(() => expect(100).toBeMoreThan(100)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(100).toBeGreaterThan(null as any)).toThrow();
            expect(() => expect(100).toBeGreaterThan(null as any)).toThrow();

            expect(() => expect(100).toBeGreaterThan(50, null as any)).toThrow();
            expect(() => expect(100).toBeGreaterThan(50, null as any)).toThrow();
        });

        it('throws when called on a non-number', () => {
            expect(() => expect(undefined)['toBeGreaterThan'](1)).toThrow();
            expect(() => expect(undefined)['toBeMoreThan'](1)).toThrow();
        });

        it('is chainable', () => {
            expect(200).toBeGreaterThan(100).toBeGreaterThan(100);
            expect(200).toBeMoreThan(100).toBeMoreThan(100);
        });
    });

    describe('toBeGreaterThanOrEqualTo / toBeMoreThanOrEqualTo', () => {
        it('does not throw when assertion passes', () => {
            expect(200).toBeGreaterThanOrEqualTo(100);
            expect(200).toBeMoreThanOrEqualTo(100);
        });

        it('throws when assertion fails', () => {
            expect(() => expect(100).toBeGreaterThanOrEqualTo(200)).toThrow();
            expect(() => expect(100).toBeMoreThanOrEqualTo(200)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(100).toBeGreaterThanOrEqualTo(null as any)).toThrow();
            expect(() => expect(100).toBeGreaterThanOrEqualTo(null as any)).toThrow();

            expect(() => expect(100).toBeGreaterThan(50, null as any)).toThrow();
            expect(() => expect(100).toBeGreaterThanOrEqualTo(50, null as any)).toThrow();
        });

        it('throws when called on a non-number', () => {
            expect(() => expect(undefined)['toBeGreaterThanOrEqualTo'](1)).toThrow();
            expect(() => expect(undefined)['toBeMoreThanOrEqualTo'](1)).toThrow();
        });

        it('is chainable', () => {
            expect(200).toBeGreaterThanOrEqualTo(100).toBeGreaterThanOrEqualTo(100);
            expect(200).toBeMoreThanOrEqualTo(100).toBeMoreThanOrEqualTo(100);
        });
    });
});
