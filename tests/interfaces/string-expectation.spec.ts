import { checkThrows } from '../helpers';
import expect from '../../src/index';

describe('expect(string)', () => {
    describe('toExist', () => {
        it('does not throw', () => {
            expect('string').toExist();
            expect('').toExist();
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect('string').toExist(null as any));
        });

        it('is chainable', () => {
            expect('string').toExist().toExist();
        });
    });

    describe('toNotExist', () => {
        it('throws', () => {
            checkThrows(() => expect('string').toNotExist());
            checkThrows(() => expect('').toNotExist());
        });
    });

    describe('toBe', () => {
        it('does not throw when assertion passes', () => {
            expect('string').toBe('string');
        });

        it('throws when assertion fails', () => {
            checkThrows(() => expect('string').toBe('different'));
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect('string').toBe('string', null as any));
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
            checkThrows(() =>  expect('string').toNotBe('string'));
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect('string').toNotBe('different', null as any));
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
            checkThrows(() => expect('string').toEqual('different'));
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect('string').toEqual('string', null as any));
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
            checkThrows(() => expect('string').toNotEqual('string'));
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect('string').toNotEqual('different', null as any));
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
            checkThrows(() => expect('string').toBeA('number'));
            checkThrows(() => expect('string').toBeAn('number'));
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect('string').toBeA(null as any));
            checkThrows(() => expect('string').toBeAn(null as any));

            checkThrows(() => expect('string').toBeA('string', null as any));
            checkThrows(() => expect('string').toBeAn('string', null as any));
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
            checkThrows(() => expect('string').toNotBeA('string'));
            checkThrows(() => expect('string').toNotBeAn('string'));
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect('string').toNotBeA(null as any));
            checkThrows(() => expect('string').toNotBeAn(null as any));

            checkThrows(() => expect('string').toNotBeA('number', null as any));
            checkThrows(() => expect('string').toNotBeAn('number', null as any));
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
            checkThrows(() => expect('I am a string').toMatch(/^.*number$/));
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect('string').toMatch(null as any));

            checkThrows(() => expect('I am a string').toMatch(/^.*string$/, null as any));
        });

        it('throws when called on a non-string', () => {
            checkThrows(() => expect(undefined)['toMatch'](/^test$/));
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
            checkThrows(() => expect('I am a string').toNotMatch(/^.*string$/));
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect('string').toNotMatch(null as any));

            checkThrows(() => expect('I am a string').toNotMatch(/^.*number$/, null as any));
        });

        it('throws when called on a non-string', () => {
            checkThrows(() => expect(undefined)['toNotMatch'](/^test$/));
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
            checkThrows(() => expect('I am a string').toInclude('number'));
            checkThrows(() => expect('I am a string').toContain('number'));
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect('string').toInclude(null as any));
            checkThrows(() => expect('string').toContain(null as any));

            checkThrows(() => expect('string').toInclude('str', null as any));
            checkThrows(() => expect('string').toContain('str', null as any));
        });

        it('throws when called on a non-string', () => {
            checkThrows(() => expect(undefined)['toInclude']('test'));
            checkThrows(() => expect(undefined)['toContain']('test'));
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
            checkThrows(() => expect('I am a string').toNotInclude('string'));
            checkThrows(() => expect('I am a string').toNotContain('string'));
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect('string').toExclude('num', null as any));
            checkThrows(() => expect('string').toNotInclude('num', null as any));
            checkThrows(() => expect('string').toNotContain('num', null as any));
        });

        it('throws when called on a non-string', () => {
            checkThrows(() => expect(undefined)['toExclude']('test'));
            checkThrows(() => expect(undefined)['toNotInclude']('test'));
            checkThrows(() => expect(undefined)['toNotContain']('test'));
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
            checkThrows(() => expect('string').toHaveLength(2));
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect('string').toHaveLength(null as any));

            checkThrows(() => expect('string').toHaveLength(6, null as any));
        });

        it('throws when called on a non-string', () => {
            checkThrows(() => expect(undefined)['toHaveLength'](6));
        });

        it('is chainable', () => {
            expect('string').toHaveLength(6).toHaveLength(6);
        });
    });

    describe('toNotHaveLength', () => {
        it('does not throw when assertion passes', () => {
            expect('string').toNotHaveLength(3);
        });

        it('throws when assertion fails', () => {
            checkThrows(() => expect('string').toNotHaveLength(6));
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect('string').toNotHaveLength(null as any));

            checkThrows(() => expect('string').toNotHaveLength(2, null as any));
        });

        it('throws when called on a non-string', () => {
            checkThrows(() => expect(undefined)['toNotHaveLength'](6));
        });

        it('is chainable', () => {
            expect('string').toNotHaveLength(3).toNotHaveLength(3);
        });
    });

    describe('toBeEmpty', () => {
        it('does not throw when assertion passes', () => {
            expect('').toBeEmpty();
        });

        it('throws when assertion fails', () => {
            checkThrows(() => expect('string').toBeEmpty());
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect('').toBeEmpty(null as any));
        });

        it('throws when called on a non-string', () => {
            checkThrows(() => expect(undefined)['toBeEmpty']());
        });

        it('is chainable', () => {
            expect('').toBeEmpty().toBeEmpty();
        });
    });

    describe('toNotBeEmpty', () => {
        it('does not throw when assertion passes', () => {
            expect('string').toNotBeEmpty();
        });

        it('throws when assertion fails', () => {
            checkThrows(() => expect('').toNotBeEmpty());
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect('string').toNotBeEmpty(null as any));
        });

        it('throws when called on a non-string', () => {
            checkThrows(() => expect(undefined)['toNotBeEmpty']());
        });

        it('is chainable', () => {
            expect('string').toNotBeEmpty().toNotBeEmpty();
        });
    });

     describe('toBeNull', () => {
        it('throws', () => {
            checkThrows(() => expect('string').toBeNull());
        });
    });

    describe('toNotBeNull', () => {
        it('does not throw', () => {
            expect('string').toNotBeNull();
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect('string').toNotBeNull(null as any));
        });

        it('is chainable', () => {
            expect('string').toNotBeNull().toNotBeNull();
        });
    });
});
