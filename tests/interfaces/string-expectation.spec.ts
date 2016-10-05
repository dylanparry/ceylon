import expect from '../../src/index';

describe('expect(string)', () => {
    describe('toExist', () => {
        it('does not throw', () => {
            expect('string').toExist();
        });

        it('throws for empty string', () => {
            expect(() => expect('').toExist()).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect('string').toExist(null as any)).toThrow();
        });

        it('is chainable', () => {
            expect('string').toExist().toExist();
        });
    });

    describe('toNotExist', () => {
        it('throws', () => {
            expect(() => expect('string').toNotExist()).toThrow();
        });

        it('does not throw for empty string', () => {
            expect('').toNotExist();
        });

        it('is chainable', () => {
            expect('').toNotExist().toNotExist();
        });
    });

    describe('toBe', () => {
        it('does not throw when assertion passes', () => {
            expect('string').toBe('string');
        });

        it('throws when assertion fails', () => {
            expect(() => expect('string').toBe('different')).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect('string').toBe('string', null as any)).toThrow();
        });

        it('is chainable', () => {
            expect('string').toBe('string').toBe('string');
        });
    });

    describe('toNotBe', () => {
        it('does not throw when assertion passes', () => {
            expect('string').toNotBe('different');
        });

        it('throws when assertion fails', () => {
            expect(() =>  expect('string').toNotBe('string')).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect('string').toNotBe('different', null as any)).toThrow();
        });

        it('is chainable', () => {
            expect('string').toNotBe('different').toNotBe('different');
        });
    });

    describe('toEqual', () => {
        it('does not throw when assertion passes', () => {
            expect('string').toEqual('string');
        });

        it('throws when assertion fails', () => {
            expect(() => expect('string').toEqual('different')).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect('string').toEqual('string', null as any)).toThrow();
        });

        it('is chainable', () => {
            expect('string').toEqual('string').toEqual('string');
        });
    });

    describe('toNotEqual', () => {
        it('does not throw when assertion passes', () => {
            expect('string').toNotEqual('different');
        });

        it('throws when assertion fails', () => {
            expect(() => expect('string').toNotEqual('string')).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect('string').toNotEqual('different', null as any)).toThrow();
        });

        it('is chainable', () => {
            expect('string').toNotEqual('different').toNotEqual('different');
        });
    });

    describe('toBeA / toBeAn', () => {
        it('does not throw when assertion passes', () => {
            expect('string').toBeA('string');
            expect('string').toBeAn('string');
        });

        it('throws when assertion fails', () => {
            expect(() => expect('string').toBeA('number')).toThrow();
            expect(() => expect('string').toBeAn('number')).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect('string').toBeA(null as any)).toThrow();
            expect(() => expect('string').toBeAn(null as any)).toThrow();

            expect(() => expect('string').toBeA('string', null as any)).toThrow();
            expect(() => expect('string').toBeAn('string', null as any)).toThrow();
        });

        it('is chainable', () => {
            expect('string').toBeA('string').toBeA('string');
        });
    });

    describe('toNotBeA / toNotBeAn', () => {
        it('does not throw when assertion passes', () => {
            expect('string').toNotBeA('number');
            expect('string').toNotBeAn('number');
        });

        it('throws when assertion fails', () => {
            expect(() => expect('string').toNotBeA('string')).toThrow();
            expect(() => expect('string').toNotBeAn('string')).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect('string').toNotBeA(null as any)).toThrow();
            expect(() => expect('string').toNotBeAn(null as any)).toThrow();

            expect(() => expect('string').toNotBeA('number', null as any)).toThrow();
            expect(() => expect('string').toNotBeAn('number', null as any)).toThrow();
        });

        it('is chainable', () => {
            expect('string').toNotBeA('number').toNotBeA('number');
        });
    });

    describe('toMatch', () => {
        it('does not throw when assertion passes', () => {
            expect('I am a string').toMatch(/^.*string$/);
        });

        it('throws when assertion fails', () => {
            expect(() => expect('I am a string').toMatch(/^.*number$/)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect('string').toMatch(null as any)).toThrow();

            expect(() => expect('I am a string').toMatch(/^.*string$/, null as any)).toThrow();
        });

        it('throws when called on a non-string', () => {
            expect(() => expect(undefined)['toMatch'](/^test$/)).toThrow();
        });

        it('is chainable', () => {
            expect('I am a string').toMatch(/^.*string$/).toMatch(/^.*string$/);
        });
    });

    describe('toNotMatch', () => {
        it('does not throw when assertion passes', () => {
            expect('I am a string').toNotMatch(/^.*number$/);
        });

        it('throws when assertion fails', () => {
            expect(() => expect('I am a string').toNotMatch(/^.*string$/)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect('string').toNotMatch(null as any)).toThrow();

            expect(() => expect('I am a string').toNotMatch(/^.*number$/, null as any)).toThrow();
        });

        it('throws when called on a non-string', () => {
            expect(() => expect(undefined)['toNotMatch'](/^test$/)).toThrow();
        });

        it('is chainable', () => {
            expect('I am a string').toNotMatch(/^.*number$/).toNotMatch(/^.*number$/);
        });
    });

    describe('toInclude / toContain', () => {
        it('does not throw when assertion passes', () => {
            expect('I am a string').toInclude('string');
            expect('I am a string').toContain('string');
        });

        it('throws when assertion fails', () => {
            expect(() => expect('I am a string').toInclude('number')).toThrow();
            expect(() => expect('I am a string').toContain('number')).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect('string').toInclude(null as any)).toThrow();
            expect(() => expect('string').toContain(null as any)).toThrow();

            expect(() => expect('string').toInclude('str', null as any)).toThrow();
            expect(() => expect('string').toContain('str', null as any)).toThrow();
        });

        it('throws when called on a non-string', () => {
            expect(() => expect(undefined)['toInclude']('test')).toThrow();
            expect(() => expect(undefined)['toContain']('test')).toThrow();
        });

        it('is chainable', () => {
            expect('I am a string').toInclude('string').toInclude('string');
            expect('I am a string').toContain('string').toContain('string');
        });
    });

    describe('toExclude / toNotInclude / toNotContain', () => {
        it('does not throw when assertion passes', () => {
            expect('I am a string').toNotInclude('number');
            expect('I am a string').toNotContain('number');
        });

        it('throws when assertion fails', () => {
            expect(() => expect('I am a string').toNotInclude('string')).toThrow();
            expect(() => expect('I am a string').toNotContain('string')).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect('string').toExclude('num', null as any)).toThrow();
            expect(() => expect('string').toNotInclude('num', null as any)).toThrow();
            expect(() => expect('string').toNotContain('num', null as any)).toThrow();
        });

        it('throws when called on a non-string', () => {
            expect(() => expect(undefined)['toExclude']('test')).toThrow();
            expect(() => expect(undefined)['toNotInclude']('test')).toThrow();
            expect(() => expect(undefined)['toNotContain']('test')).toThrow();
        });

        it('is chainable', () => {
            expect('I am a string').toNotInclude('number').toNotInclude('number');
            expect('I am a string').toNotContain('number').toNotContain('number');
        });
    });

    describe('toHaveLength', () => {
        it('does not throw when assertion passes', () => {
            expect('string').toHaveLength(6);
        });

        it('throws when assertion fails', () => {
            expect(() => expect('string').toHaveLength(2)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect('string').toHaveLength(null as any)).toThrow();

            expect(() => expect('string').toHaveLength(6, null as any)).toThrow();
        });

        it('throws when called on a non-string', () => {
            expect(() => expect(undefined)['toHaveLength'](6)).toThrow();
        });

        it('is chainable', () => {
            expect('string').toHaveLength(6).toHaveLength(6);
        });
    });
});
