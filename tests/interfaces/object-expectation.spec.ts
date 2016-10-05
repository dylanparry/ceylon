import expect from '../../src/index';

describe('expect(Object)', () => {
    describe('toExist', () => {
        it('does not throw', () => {
            expect({ id: 1 }).toExist();
            expect({}).toExist();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect({ name: 'Object' }).toExist(null as any)).toThrow();
        });

        it('is chainable', () => {
            expect({ id: 1 }).toExist().toExist();
        });
    });

    describe('toNotExist', () => {
        it('throws', () => {
            expect(() => expect({ id: 1 }).toNotExist()).toThrow();
            expect(() => expect({}).toNotExist()).toThrow();
        });
    });

    describe('toBe', () => {
        it('does not throw when assertion passes', () => {
            const data = { id: 1 };

            expect(data).toBe(data);
        });

        it('throws when assertion fails', () => {
            expect(() => expect({ id: 1 }).toBe({ id: 1 })).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            const data = { id: 1 };

            expect(() => expect(data).toBe(data, null as any)).toThrow();
        });

        it('is chainable', () => {
            const data = { id: 1 };

            expect(data).toBe(data).toBe(data);
        });
    });

    describe('toNotBe', () => {
        it('does not throw when assertion passes', () => {
            expect({ id: 1 }).toNotBe({ id: 1 });
        });

        it('throws when assertion fails', () => {
            const data = { id: 1 };

            expect(() =>  expect(data).toNotBe(data)).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect({ name: 'Object' }).toNotBe({ name: 'Object' }, null as any)).toThrow();
        });

        it('is chainable', () => {
            expect({ id: 1 }).toNotBe({ id: 1 }).toNotBe({ id: 1 });
        });
    });

    describe('toEqual', () => {
        it('does not throw when assertion passes', () => {
            expect({ id: 1 }).toEqual({ id: 1 });
        });

        it('throws when assertion fails', () => {
            expect(() => expect({ id: 1 }).toEqual({ id: 2 })).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect({ name: 'Object' }).toEqual({ name: 'Object' }, null as any)).toThrow();
        });

        it('is chainable', () => {
            expect({ id: 1 }).toEqual({ id: 1 }).toEqual({ id: 1 });
        });
    });

    describe('toNotEqual', () => {
        it('does not throw when assertion passes', () => {
            expect({ id: 1 }).toNotEqual({ id: 2 });
        });

        it('throws when assertion fails', () => {
            expect(() => expect({ id: 1 }).toNotEqual({ id: 1 })).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect({ name: 'Object' }).toNotEqual({ name: 'Object 2' }, null as any)).toThrow();
        });

        it('is chainable', () => {
            expect({ id: 1 }).toNotEqual({ id: 2 }).toNotEqual({ id: 2 });
        });
    });

    describe('toInclude / toContain', () => {
        it('does not throw when assertion passes', () => {
            expect({ id: 1, name: 'Object' }).toInclude({ id: 1 });
            expect({ id: 1, name: 'Object' }).toContain({ id: 1 });
            expect({ complex: { sub: 1 }, id: 1, name: 'Object' }).toInclude({ complex: { sub: 1 }, id: 1 });
            expect({ complex: { sub: 1 }, id: 1, name: 'Object' }).toContain({ complex: { sub: 1 }, id: 1 });
        });

        it('throws when assertion fails', () => {
            expect(() => expect({ id: 1 }).toInclude({ name: 'Object' })).toThrow();
            expect(() => expect({ id: 1 }).toContain({ name: 'Object' })).toThrow();
            expect(() => expect({ id: 1 }).toInclude({ id: 2 })).toThrow();
            expect(() => expect({ id: 1 }).toContain({ id: 2 })).toThrow();
            expect(() => expect({ complex: { sub: 1 }, id: 1, name: 'Object' }).toInclude({ sub: 1 })).toThrow();
            expect(() => expect({ complex: { sub: 1 }, id: 1, name: 'Object' }).toContain({ sub: 1 })).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect({ name: 'Object' }).toInclude({ name: 'Object' }, null as any)).toThrow();
            expect(() => expect({ name: 'Object' }).toContain({ name: 'Object' }, null as any)).toThrow();
        });

        it('throws when called on a non-object', () => {
            expect(() => expect(undefined)['toInclude']({ id: 1 })).toThrow();
            expect(() => expect(undefined)['toContain']({ id: 1 })).toThrow();
        });

        it('is chainable', () => {
            expect({ id: 1, name: 'Object' }).toInclude({ id: 1 }).toInclude({ id: 1 });
            expect({ id: 1, name: 'Object' }).toContain({ id: 1 }).toContain({ id: 1 });
        });
    });

    describe('toExclude / toNotInclude / toNotContain', () => {
        it('does not throw when assertion passes', () => {
            expect({ id: 1 }).toExclude({ name: 'Object' });
            expect({ id: 1 }).toNotInclude({ name: 'Object' });
            expect({ id: 1 }).toNotContain({ name: 'Object' });

            expect({ id: 1 }).toExclude({ id: 2 });
            expect({ id: 1 }).toNotInclude({ id: 2 });
            expect({ id: 1 }).toNotContain({ id: 2 });

            expect({ complex: { sub: 1 }, id: 1 }).toExclude({ sub: 1 });
            expect({ complex: { sub: 1 }, id: 1 }).toNotInclude({ sub: 1 });
            expect({ complex: { sub: 1 }, id: 1 }).toNotContain({ sub: 1 });
        });

        it('throws when assertion fails', () => {
            expect(() => expect({ id: 1 }).toExclude({ id: 1 })).toThrow();
            expect(() => expect({ id: 1 }).toNotInclude({ id: 1 })).toThrow();
            expect(() => expect({ id: 1 }).toNotContain({ id: 1 })).toThrow();

            expect(() => expect({complex: { sub: 1 }, id: 1 }).toExclude({ complex: { sub: 1 } })).toThrow();
            expect(() => expect({ complex: { sub: 1 }, id: 1 }).toNotInclude({ complex: { sub: 1 } })).toThrow();
            expect(() => expect({ complex: { sub: 1 }, id: 1 }).toNotContain({ complex: { sub: 1 } })).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect({ name: 'Object' }).toExclude({ name: 'Object 2' }, null as any)).toThrow();
            expect(() => expect({ name: 'Object' }).toNotInclude({ name: 'Object 2' }, null as any)).toThrow();
            expect(() => expect({ name: 'Object' }).toNotContain({ name: 'Object 2' }, null as any)).toThrow();
        });

        it('throws when called on a non-object', () => {
            expect(() => expect(undefined)['toExclude']({ id: 1 })).toThrow();
            expect(() => expect(undefined)['toNotInclude']({ id: 1 })).toThrow();
            expect(() => expect(undefined)['toNotContain']({ id: 1 })).toThrow();
        });

        it('is chainable', () => {
            expect({ id: 1 }).toExclude({ name: 'Object' }).toExclude({ name: 'Object' });
            expect({ id: 1 }).toNotInclude({ name: 'Object' }).toNotInclude({ name: 'Object' });
            expect({ id: 1 }).toNotContain({ name: 'Object' }).toNotContain({ name: 'Object' });
        });
    });

    describe('toIncludeKey / toContainKey', () => {
        it('does not throw when assertion passes', () => {
            expect({ id: 1, name: 'Object' }).toIncludeKey('name');
            expect({ id: 1, name: 'Object' }).toContainKey('name');
        });

        it('throws error when assertion fails', () => {
            expect(() => expect({ id: 1, name: 'Object' }).toIncludeKey('value')).toThrow();
            expect(() => expect({ id: 1, name: 'Object' }).toContainKey('value')).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect({ name: 'Object' }).toIncludeKey(null as any)).toThrow();
            expect(() => expect({ name: 'Object' }).toContainKey(null as any)).toThrow();

            expect(() => expect({ name: 'Object' }).toIncludeKey('name', null as any)).toThrow();
            expect(() => expect({ name: 'Object' }).toContainKey('name', null as any)).toThrow();
        });

        it('throws when called on a non-object', () => {
            expect(() => expect(undefined)['toIncludeKey']('name')).toThrow();
            expect(() => expect(undefined)['toContainKey']('name')).toThrow();
        });

        it('is chainable', () => {
            expect({ id: 1, name: 'Object' }).toIncludeKey('name').toIncludeKey('name');
            expect({ id: 1, name: 'Object' }).toContainKey('name').toContainKey('name');
        });
    });

    describe('toExcludeKey / toNotIncludeKey / toNotContainKey', () => {
        it('does not throw when assertion passes', () => {
            expect({ id: 1, name: 'Object' }).toExcludeKey('value');
            expect({ id: 1, name: 'Object' }).toNotIncludeKey('value');
            expect({ id: 1, name: 'Object' }).toNotContainKey('value');
        });

        it('throws error when assertion fails', () => {
            expect(() => expect({ id: 1, name: 'Object' }).toExcludeKey('name')).toThrow();
            expect(() => expect({ id: 1, name: 'Object' }).toNotIncludeKey('name')).toThrow();
            expect(() => expect({ id: 1, name: 'Object' }).toNotContainKey('name')).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect({ name: 'Object' }).toExcludeKey(null as any)).toThrow();
            expect(() => expect({ name: 'Object' }).toNotIncludeKey(null as any)).toThrow();
            expect(() => expect({ name: 'Object' }).toNotContainKey(null as any)).toThrow();

            expect(() => expect({ name: 'Object' }).toExcludeKey('foo', null as any)).toThrow();
            expect(() => expect({ name: 'Object' }).toIncludeKey('foo', null as any)).toThrow();
            expect(() => expect({ name: 'Object' }).toNotContainKey('foo', null as any)).toThrow();
        });

        it('throws when called on a non-object', () => {
            expect(() => expect(undefined)['toExcludeKey']('name')).toThrow();
            expect(() => expect(undefined)['toNotIncludeKey']('name')).toThrow();
            expect(() => expect(undefined)['toNotContainKey']('name')).toThrow();
        });

        it('is chainable', () => {
            expect({ id: 1, name: 'Object' }).toExcludeKey('value').toExcludeKey('value');
            expect({ id: 1, name: 'Object' }).toNotIncludeKey('value').toNotContainKey('value');
            expect({ id: 1, name: 'Object' }).toNotContainKey('value').toNotContainKey('value');
        });
    });

    describe('toIncludeKeys / toContainKeys', () => {
        it('does not throw when assertion passes', () => {
            expect({ id: 1, name: 'Object' }).toIncludeKeys(['id', 'name']);
            expect({ id: 1, name: 'Object' }).toContainKeys(['id', 'name']);
        });

        it('throws error when assertion fails', () => {
            expect(() => expect({ id: 1, name: 'Object' }).toIncludeKeys(['value', 'location'])).toThrow();
            expect(() => expect({ id: 1, name: 'Object' }).toContainKeys(['value', 'location'])).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect({ id: 1, name: 'Object' }).toIncludeKeys(null as any)).toThrow();
            expect(() => expect({ id: 1, name: 'Object' }).toContainKeys(null as any)).toThrow();

            expect(() => expect({ id: 1, name: 'Object' }).toIncludeKeys(['name', 'id'], null as any)).toThrow();
            expect(() => expect({ id: 1, name: 'Object' }).toContainKeys(['name', 'id'], null as any)).toThrow();
        });

        it('throws when called on a non-object', () => {
            expect(() => expect(undefined)['toIncludeKeys'](['name', 'age'])).toThrow();
            expect(() => expect(undefined)['toContainKeys'](['name', 'age'])).toThrow();
        });

        it('is chainable', () => {
            expect({ id: 1, name: 'Object' }).toIncludeKeys(['id', 'name']).toIncludeKeys(['id', 'name']);
            expect({ id: 1, name: 'Object' }).toContainKeys(['id', 'name']).toContainKeys(['id', 'name']);
        });
    });

    describe('toExcludeKeys / toNotIncludeKeys / toNotContainKeys', () => {
        it('does not throw when assertion passes', () => {
            expect({ id: 1, name: 'Object' }).toExcludeKeys(['value', 'location']);
            expect({ id: 1, name: 'Object' }).toNotIncludeKeys(['value', 'location']);
            expect({ id: 1, name: 'Object' }).toNotContainKeys(['value', 'location']);
        });

        it('throws error when assertion fails', () => {
            expect(() => expect({ id: 1, name: 'Object' }).toExcludeKeys(['id', 'name'])).toThrow();
            expect(() => expect({ id: 1, name: 'Object' }).toNotIncludeKeys(['id', 'name'])).toThrow();
            expect(() => expect({ id: 1, name: 'Object' }).toNotContainKeys(['id', 'name'])).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect({ name: 'Object' }).toExcludeKeys(null as any)).toThrow();
            expect(() => expect({ name: 'Object' }).toNotIncludeKeys(null as any)).toThrow();
            expect(() => expect({ name: 'Object' }).toNotContainKeys(null as any)).toThrow();

            expect(() => expect({ name: 'Object' }).toExcludeKeys(['foo', 'bar'], null as any)).toThrow();
            expect(() => expect({ name: 'Object' }).toIncludeKeys(['foo', 'bar'], null as any)).toThrow();
            expect(() => expect({ name: 'Object' }).toNotContainKeys(['foo', 'bar'], null as any)).toThrow();
        });

        it('throws when called on a non-object', () => {
            expect(() => expect(undefined)['toExcludeKeys'](['name', 'age'])).toThrow();
            expect(() => expect(undefined)['toNotIncludeKeys'](['name', 'age'])).toThrow();
            expect(() => expect(undefined)['toNotContainKeys'](['name', 'age'])).toThrow();
        });

        it('is chainable', () => {
            expect({ id: 1, name: 'Object' }).toExcludeKeys(['value', 'location']).toExcludeKeys(['value', 'location']);
            expect({ id: 1, name: 'Object' }).toNotIncludeKeys(['value', 'location']).toNotContainKeys(['value', 'location']);
            expect({ id: 1, name: 'Object' }).toNotContainKeys(['value', 'location']).toNotContainKeys(['value', 'location']);
        });
    });

    describe('toBeA / toBeAn', () => {
        it('does not throw when assertion passes', () => {
            expect(new TypeError()).toBeA(TypeError);
            expect(new EvalError()).toBeAn(EvalError);
            expect(new TypeError()).toBeA('object');
            expect(new TypeError()).toBeAn('object');
        });

        it('throws when assertion fails', () => {
            expect(() => expect(new EvalError()).toBeA(TypeError)).toThrow();
            expect(() => expect(new TypeError()).toBeAn(EvalError)).toThrow();
            expect(() => expect(new TypeError()).toBeA('number')).toThrow();
            expect(() => expect(new TypeError()).toBeAn('number')).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(new TypeError()).toBeA(null as any)).toThrow();
            expect(() => expect(new TypeError()).toBeAn(null as any)).toThrow();

            expect(() => expect(new TypeError()).toBeA(TypeError, null as any)).toThrow();
            expect(() => expect(new EvalError()).toBeAn(EvalError, null as any)).toThrow();
            expect(() => expect(new TypeError()).toBeA('object', null as any)).toThrow();
            expect(() => expect(new TypeError()).toBeAn('object', null as any)).toThrow();
        });

        it('is chainable', () => {
            expect(new TypeError()).toBeA(TypeError).toBeA(TypeError);
            expect(new EvalError()).toBeAn(EvalError).toBeAn(EvalError);
            expect(new TypeError()).toBeA('object').toBeA('object');
            expect(new TypeError()).toBeAn('object').toBeAn('object');
        });
    });

    describe('toNotBeA / toNotBeAn', () => {
        it('does not throw when assertion passes', () => {
            expect(new EvalError()).toNotBeA(TypeError);
            expect(new TypeError()).toNotBeAn(EvalError);
            expect(new TypeError()).toNotBeA('number');
            expect(new TypeError()).toNotBeAn('number');
        });

        it('throws when assertion fails', () => {
            expect(() => expect(new TypeError()).toNotBeA(TypeError)).toThrow();
            expect(() => expect(new EvalError()).toNotBeAn(EvalError)).toThrow();
            expect(() => expect(new TypeError()).toNotBeA('object')).toThrow();
            expect(() => expect(new TypeError()).toNotBeAn('object')).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect(new TypeError()).toNotBeA(null as any)).toThrow();
            expect(() => expect(new TypeError()).toNotBeAn(null as any)).toThrow();

            expect(() => expect(new TypeError()).toNotBeA(EvalError, null as any)).toThrow();
            expect(() => expect(new EvalError()).toNotBeAn(TypeError, null as any)).toThrow();
            expect(() => expect(new TypeError()).toNotBeA('number', null as any)).toThrow();
            expect(() => expect(new TypeError()).toNotBeAn('number', null as any)).toThrow();
        });

        it('is chainable', () => {
            expect(new EvalError()).toNotBeA(TypeError).toNotBeA(TypeError);
            expect(new TypeError()).toNotBeAn(EvalError).toNotBeAn(EvalError);
            expect(new TypeError()).toNotBeA('number').toNotBeA('number');
            expect(new TypeError()).toNotBeAn('number').toNotBeAn('number');
        });
    });

    describe('toBeEmpty', () => {
        it('does not throw when assertion passes', () => {
            expect({}).toBeEmpty();
        });

        it('throws when assertion fails', () => {
            expect(() => expect({ name: 'Object' }).toBeEmpty()).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect({}).toBeEmpty(null as any)).toThrow();
        });

        it('throws when called on a non-object', () => {
            expect(() => expect(undefined)['toBeEmpty']()).toThrow();
        });

        it('is chainable', () => {
            expect({}).toBeEmpty().toBeEmpty();
        });
    });

    describe('toNotBeEmpty', () => {
        it('does not throw when assertion passes', () => {
            expect({ name: 'Object' }).toNotBeEmpty();
        });

        it('throws when assertion fails', () => {
            expect(() => expect({}).toNotBeEmpty()).toThrow();
        });

        it('throws when called with invalid arguments', () => {
            expect(() => expect({ name: 'Object' }).toNotBeEmpty(null as any)).toThrow();
        });

        it('throws when called on a non-object', () => {
            expect(() => expect(undefined)['toNotBeEmpty']()).toThrow();
        });

        it('is chainable', () => {
            expect({ name: 'Object' }).toNotBeEmpty().toNotBeEmpty();
        });
    });
});
