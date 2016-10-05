import expect from '../../src/index';

describe('expect(Function)', () => {
    describe('toExist', () => {
        it('does not throw', () => {
            expect(Math.random).toExist();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(Math.random).toExist(null as any)).toThrow();
        });

        it('is chainable', () => {
            expect(Math.random).toExist().toExist();
        });
    });

    describe('toNotExist', () => {
        it('throws', () => {
            expect(() => expect(Math.random).toNotExist()).toThrow();
        });
    });

    describe('toBe', () => {
        it('does not throw when assertion passes', () => {
            expect(Math.random).toBe(Math.random);
        });

        it('throws when assertion fails', () => {
            expect(() => expect(Math.random).toBe(Math.floor)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(Math.random).toBe(Math.random, null as any)).toThrow();
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
            expect(() =>  expect(Math.random).toNotBe(Math.random)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(Math.random).toNotBe(Math.floor, null as any)).toThrow();
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
            expect(() => expect(Math.random).toEqual(Math.floor)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(Math.random).toEqual(Math.random, null as any)).toThrow();
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
            expect(() => expect(Math.random).toNotEqual(Math.random)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(Math.random).toNotEqual(Math.floor, null as any)).toThrow();
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
            expect(() => expect(Math.random).toBeA('number')).toThrow();
            expect(() => expect(Math.random).toBeAn('number')).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(Math.random).toBeA(null as any)).toThrow();
            expect(() => expect(Math.random).toBeAn(null as any)).toThrow();

            expect(() => expect(Math.random).toBeA('function', null as any)).toThrow();
            expect(() => expect(Math.random).toBeAn('function', null as any)).toThrow();
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
            expect(() => expect(Math.random).toNotBeA('function')).toThrow();
            expect(() => expect(Math.random).toNotBeAn('function')).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(Math.random).toNotBeA(null as any)).toThrow();
            expect(() => expect(Math.random).toNotBeAn(null as any)).toThrow();

            expect(() => expect(Math.random).toNotBeA('number', null as any)).toThrow();
            expect(() => expect(Math.random).toNotBeAn('numer', null as any)).toThrow();
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
            expect(() => expect(() => true).toThrow()).toThrow();
            expect(() => expect(() => { throw new Error('Error Message'); }).toThrow('Message')).toThrow();
            expect(() => expect(() => { throw new Error('Error Message'); }).toThrow(/Failed/)).toThrow();
            expect(() => expect(() => { throw new TypeError(); }).toThrow(SyntaxError)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(Math.random).toThrow(null as any)).toThrow();
            expect(() => expect(Math.random).toThrow('Error Name', null as any)).toThrow();
            expect(() => expect(Math.random).toThrow(/Error Name/, null as any)).toThrow();
            expect(() => expect(Math.random).toThrow(TypeError, null as any)).toThrow();
        });

        it('throws when called on a non-function', () => {
            expect(() => expect(undefined)['toThrow']()).toThrow();
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
            expect(() => expect(() => { throw new Error(); }).toNotThrow()).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(Math.random).toNotThrow(null as any)).toThrow();
        });

        it('throws when called on a non-function', () => {
            expect(() => expect(undefined)['toNotThrow']()).toThrow();
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
            expect(() => expect(Math.random).toIncludeKey('value')).toThrow();
            expect(() => expect(Math.random).toContainKey('value')).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(Math.random).toIncludeKey(null as any)).toThrow();
            expect(() => expect(Math.random).toContainKey(null as any)).toThrow();

            expect(() => expect(Math.random).toIncludeKey('name', null as any)).toThrow();
            expect(() => expect(Math.random).toContainKey('name', null as any)).toThrow();
        });

        it('throws when called on a non-function', () => {
            expect(() => expect(undefined)['toIncludeKey']('name')).toThrow();
            expect(() => expect(undefined)['toContainKey']('name')).toThrow();
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
            expect(() => expect(Math.random).toExcludeKey('name')).toThrow();
            expect(() => expect(Math.random).toNotIncludeKey('name')).toThrow();
            expect(() => expect(Math.random).toNotContainKey('name')).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(Math.random).toExcludeKey(null as any)).toThrow();
            expect(() => expect(Math.random).toNotIncludeKey(null as any)).toThrow();
            expect(() => expect(Math.random).toNotContainKey(null as any)).toThrow();

            expect(() => expect(Math.random).toExcludeKey('foo', null as any)).toThrow();
            expect(() => expect(Math.random).toNotIncludeKey('foo', null as any)).toThrow();
            expect(() => expect(Math.random).toNotContainKey('foo', null as any)).toThrow();
        });

        it('throws when called on a non-function', () => {
            expect(() => expect(undefined)['toExcludeKey']('name')).toThrow();
            expect(() => expect(undefined)['toNotIncludeKey']('name')).toThrow();
            expect(() => expect(undefined)['toNotContainKey']('name')).toThrow();
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
            expect(() => expect(Math.random).toIncludeKeys(['value', 'location'])).toThrow();
            expect(() => expect(Math.random).toContainKeys(['value', 'location'])).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(Math.random).toIncludeKeys(null as any)).toThrow();
            expect(() => expect(Math.random).toContainKeys(null as any)).toThrow();

            expect(() => expect(Math.random).toIncludeKeys(['name', 'length'], null as any)).toThrow();
            expect(() => expect(Math.random).toContainKeys(['name', 'length'], null as any)).toThrow();
        });

        it('throws when called on a non-function', () => {
            expect(() => expect(undefined)['toIncludeKeys'](['name', 'length'])).toThrow();
            expect(() => expect(undefined)['toContainKeys'](['name', 'length'])).toThrow();
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
            expect(() => expect(Math.random).toExcludeKeys(['name', 'id'])).toThrow();
            expect(() => expect(Math.random).toNotIncludeKeys(['name', 'id'])).toThrow();
            expect(() => expect(Math.random).toNotContainKeys(['name', 'id'])).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(Math.random).toExcludeKeys(null as any)).toThrow();
            expect(() => expect(Math.random).toNotIncludeKeys(null as any)).toThrow();
            expect(() => expect(Math.random).toNotContainKeys(null as any)).toThrow();

            expect(() => expect(Math.random).toExcludeKeys(['foo', 'bar'], null as any)).toThrow();
            expect(() => expect(Math.random).toNotIncludeKeys(['foo', 'bar'], null as any)).toThrow();
            expect(() => expect(Math.random).toNotContainKeys(['foo', 'bar'], null as any)).toThrow();
        });

        it('throws when called on a non-function', () => {
            expect(() => expect(undefined)['toExcludeKey'](['name', 'length'])).toThrow();
            expect(() => expect(undefined)['toNotIncludeKeys'](['name', 'length'])).toThrow();
            expect(() => expect(undefined)['toNotContainKeys'](['name', 'length'])).toThrow();
        });

        it('is chainable', () => {
            expect(Math.random).toExcludeKeys(['value', 'location']).toExcludeKeys(['value', 'location']);
            expect(Math.random).toNotIncludeKeys(['value', 'location']).toNotContainKeys(['value', 'location']);
            expect(Math.random).toNotContainKeys(['value', 'location']).toNotContainKeys(['value', 'location']);
        });
    });
});
