﻿import { checkThrows } from '../helpers';
import expect from '../../src/index';

describe('expect(Function)', () => {
    describe('toExist', () => {
        it('does not throw', () => {
            expect(Math.random).toExist();
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect(Math.random).toExist(null as any));
        });

        it('is chainable', () => {
            expect(Math.random).toExist().toExist();
        });
    });

    describe('toNotExist', () => {
        it('throws', () => {
            checkThrows(() => expect(Math.random).toNotExist());
        });
    });

    describe('toBe', () => {
        it('does not throw when assertion passes', () => {
            expect(Math.random).toBe(Math.random);
        });

        it('throws when assertion fails', () => {
            checkThrows(() => expect(Math.random).toBe(Math.floor));
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect(Math.random).toBe(Math.random, null as any));
        });

        it('is chainable', () => {
            expect(Math.random).toBe(Math.random).toBe(Math.random);
        });
    });

    describe('toNotBe', () => {
        it('does not throw when assertion passes', () => {
            expect(Math.random).toNotBe(Math.floor);
        });

        it('throws when assertion fails', () => {
            checkThrows(() =>  expect(Math.random).toNotBe(Math.random));
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect(Math.random).toNotBe(Math.floor, null as any));
        });

        it('is chainable', () => {
            expect(Math.random).toNotBe(Math.floor).toNotBe(Math.floor);
        });
    });

    describe('toEqual', () => {
        it('does not throw when assertion passes', () => {
            expect(Math.random).toEqual(Math.random);
        });

        it('throws when assertion fails', () => {
            checkThrows(() => expect(Math.random).toEqual(Math.floor));
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect(Math.random).toEqual(Math.random, null as any));
        });

        it('is chainable', () => {
            expect(Math.random).toEqual(Math.random).toEqual(Math.random);
        });
    });

    describe('toNotEqual', () => {
        it('does not throw when assertion passes', () => {
            expect(Math.random).toNotEqual(Math.floor);
        });

        it('throws when assertion fails', () => {
            checkThrows(() => expect(Math.random).toNotEqual(Math.random));
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect(Math.random).toNotEqual(Math.floor, null as any));
        });

        it('is chainable', () => {
            expect(Math.random).toNotEqual(Math.floor).toNotEqual(Math.floor);
        });
    });

    describe('toBeA / toBeAn', () => {
        it('does not throw when assertion passes', () => {
            expect(Math.random).toBeA('function');
            expect(Math.random).toBeAn('function');
        });

        it('throws when assertion fails', () => {
            checkThrows(() => expect(Math.random).toBeA('number'));
            checkThrows(() => expect(Math.random).toBeAn('number'));
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect(Math.random).toBeA(null as any));
            checkThrows(() => expect(Math.random).toBeAn(null as any));

            checkThrows(() => expect(Math.random).toBeA('function', null as any));
            checkThrows(() => expect(Math.random).toBeAn('function', null as any));
        });

        it('is chainable', () => {
            expect(Math.random).toBeA('function').toBeA('function');
        });
    });

    describe('toNotBeA / toNotBeAn', () => {
        it('does not throw when assertion passes', () => {
            expect(Math.random).toNotBeA('number');
            expect(Math.random).toNotBeAn('number');
        });

        it('throws when assertion fails', () => {
            checkThrows(() => expect(Math.random).toNotBeA('function'));
            checkThrows(() => expect(Math.random).toNotBeAn('function'));
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect(Math.random).toNotBeA(null as any));
            checkThrows(() => expect(Math.random).toNotBeAn(null as any));

            checkThrows(() => expect(Math.random).toNotBeA('number', null as any));
            checkThrows(() => expect(Math.random).toNotBeAn('numer', null as any));
        });

        it('is chainable', () => {
            expect(Math.random).toNotBeA('number').toNotBeA('number');
        });
    });

    describe('toThrow', () => {
        it('does not throw when assertion passes', () => {
            expect(() => { throw new Error(); }).toThrow();
            expect(() => { throw new Error('Error Message'); }).toThrow('Error Message');
            expect(() => { throw new Error('Error Message'); }).toThrow(/Error/);
            expect(() => { throw new TypeError(); }).toThrow(TypeError);
        });

        it('throws when assertion fails', () => {
            checkThrows(() => expect(() => true).toThrow());
            checkThrows(() => expect(() => { throw new Error('Error Message'); }).toThrow('Message'));
            checkThrows(() => expect(() => { throw new Error('Error Message'); }).toThrow(/Failed/));
            checkThrows(() => expect(() => { throw new TypeError(); }).toThrow(SyntaxError));
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect(Math.random).toThrow(null as any));
            checkThrows(() => expect(Math.random).toThrow('Error Name', null as any));
            checkThrows(() => expect(Math.random).toThrow(/Error Name/, null as any));
            checkThrows(() => expect(Math.random).toThrow(TypeError, null as any));
        });

        it('throws when called on a non-function', () => {
            checkThrows(() => expect(undefined)['toThrow']());
        });

        it('is chainable', () => {
            expect(() => { throw new Error(); }).toThrow().toThrow();
        });
    });

    describe('toNotThrow', () => {
        it('does not throw when assertion passes', () => {
            expect(() => Math.random()).toNotThrow();
        });

        it('throws when assertion fails', () => {
            checkThrows(() => expect(() => { throw new Error(); }).toNotThrow());
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect(Math.random).toNotThrow(null as any));
        });

        it('throws when called on a non-function', () => {
            checkThrows(() => expect(undefined)['toNotThrow']());
        });

        it('is chainable', () => {
            expect(() => Math.random()).toNotThrow().toNotThrow();
        });
    });

    describe('toIncludeKey / toContainKey', () => {
        it('does not throw when assertion passes', () => {
            expect(Math.random).toIncludeKey('name');
        });

        it('throws error when assertion fails', () => {
            checkThrows(() => expect(Math.random).toIncludeKey('value'));
            checkThrows(() => expect(Math.random).toContainKey('value'));
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect(Math.random).toIncludeKey(null as any));
            checkThrows(() => expect(Math.random).toContainKey(null as any));

            checkThrows(() => expect(Math.random).toIncludeKey('name', null as any));
            checkThrows(() => expect(Math.random).toContainKey('name', null as any));
        });

        it('throws when called on a non-function', () => {
            checkThrows(() => expect(undefined)['toIncludeKey']('name'));
            checkThrows(() => expect(undefined)['toContainKey']('name'));
        });

        it('is chainable', () => {
            expect(Math.random).toIncludeKey('name').toIncludeKey('name');
            expect(Math.random).toContainKey('name').toContainKey('name');
        });
    });

    describe('toExcludeKey / toNotIncludeKey / toNotContainKey', () => {
        it('does not throw when assertion passes', () => {
            expect(Math.random).toExcludeKey('value');
            expect(Math.random).toNotIncludeKey('value');
            expect(Math.random).toNotContainKey('value');
        });

        it('throws error when assertion fails', () => {
            checkThrows(() => expect(Math.random).toExcludeKey('name'));
            checkThrows(() => expect(Math.random).toNotIncludeKey('name'));
            checkThrows(() => expect(Math.random).toNotContainKey('name'));
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect(Math.random).toExcludeKey(null as any));
            checkThrows(() => expect(Math.random).toNotIncludeKey(null as any));
            checkThrows(() => expect(Math.random).toNotContainKey(null as any));

            checkThrows(() => expect(Math.random).toExcludeKey('foo', null as any));
            checkThrows(() => expect(Math.random).toNotIncludeKey('foo', null as any));
            checkThrows(() => expect(Math.random).toNotContainKey('foo', null as any));
        });

        it('throws when called on a non-function', () => {
            checkThrows(() => expect(undefined)['toExcludeKey']('name'));
            checkThrows(() => expect(undefined)['toNotIncludeKey']('name'));
            checkThrows(() => expect(undefined)['toNotContainKey']('name'));
        });

        it('is chainable', () => {
            expect(Math.random).toExcludeKey('value').toExcludeKey('value');
            expect(Math.random).toNotIncludeKey('value').toNotContainKey('value');
            expect(Math.random).toNotContainKey('value').toNotContainKey('value');
        });
    });

    describe('toIncludeKeys / toContainKeys', () => {
        it('does not throw when assertion passes', () => {
            expect(Math.random).toIncludeKeys(['name', 'length']);
            expect(Math.random).toContainKeys(['name', 'length']);
        });

        it('throws error when assertion fails', () => {
            checkThrows(() => expect(Math.random).toIncludeKeys(['value', 'location']));
            checkThrows(() => expect(Math.random).toContainKeys(['value', 'location']));
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect(Math.random).toIncludeKeys(null as any));
            checkThrows(() => expect(Math.random).toContainKeys(null as any));

            checkThrows(() => expect(Math.random).toIncludeKeys(['name', 'length'], null as any));
            checkThrows(() => expect(Math.random).toContainKeys(['name', 'length'], null as any));
        });

        it('throws when called on a non-function', () => {
            checkThrows(() => expect(undefined)['toIncludeKeys'](['name', 'length']));
            checkThrows(() => expect(undefined)['toContainKeys'](['name', 'length']));
        });

        it('is chainable', () => {
            expect(Math.random).toIncludeKeys(['name', 'length']).toIncludeKeys(['name', 'length']);
            expect(Math.random).toContainKeys(['name', 'length']).toContainKeys(['name', 'length']);
        });
    });

    describe('toExcludeKeys / toNotIncludeKeys / toNotContainKeys', () => {
        it('does not throw when assertion passes', () => {
            expect(Math.random).toExcludeKeys(['value', 'location']);
            expect(Math.random).toNotIncludeKeys(['value', 'location']);
            expect(Math.random).toNotContainKeys(['value', 'location']);
        });

        it('throws error when assertion fails', () => {
            checkThrows(() => expect(Math.random).toExcludeKeys(['name', 'id']));
            checkThrows(() => expect(Math.random).toNotIncludeKeys(['name', 'id']));
            checkThrows(() => expect(Math.random).toNotContainKeys(['name', 'id']));
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect(Math.random).toExcludeKeys(null as any));
            checkThrows(() => expect(Math.random).toNotIncludeKeys(null as any));
            checkThrows(() => expect(Math.random).toNotContainKeys(null as any));

            checkThrows(() => expect(Math.random).toExcludeKeys(['foo', 'bar'], null as any));
            checkThrows(() => expect(Math.random).toNotIncludeKeys(['foo', 'bar'], null as any));
            checkThrows(() => expect(Math.random).toNotContainKeys(['foo', 'bar'], null as any));
        });

        it('throws when called on a non-function', () => {
            checkThrows(() => expect(undefined)['toExcludeKey'](['name', 'length']));
            checkThrows(() => expect(undefined)['toNotIncludeKeys'](['name', 'length']));
            checkThrows(() => expect(undefined)['toNotContainKeys'](['name', 'length']));
        });

        it('is chainable', () => {
            expect(Math.random).toExcludeKeys(['value', 'location']).toExcludeKeys(['value', 'location']);
            expect(Math.random).toNotIncludeKeys(['value', 'location']).toNotContainKeys(['value', 'location']);
            expect(Math.random).toNotContainKeys(['value', 'location']).toNotContainKeys(['value', 'location']);
        });
    });

     describe('toBeNull', () => {
        it('throws', () => {
            checkThrows(() => expect(Math.random).toBeNull());
        });
    });

    describe('toNotBeNull', () => {
        it('does not throw', () => {
            expect(Math.random).toNotBeNull();
        });

        it('throws when called with invalid arguments', () => {
            checkThrows(() => expect(Math.random).toNotBeNull(null as any));
        });

        it('is chainable', () => {
            expect(Math.random).toNotBeNull().toNotBeNull();
        });
    });
});
