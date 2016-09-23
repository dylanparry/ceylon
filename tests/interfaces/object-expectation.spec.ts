import { checkThrows } from '../helpers';
import expect from '../../src/index';

describe('expect(Object)', () => {
	describe('toExist', () => {
		it('does not throw when assertion passes', () => {
			expect({ id: 1 }).toExist();
			expect({}).toExist();

			const data: Object | null = null;
			expect(data).toExist();
		});

		it('throws when assertion fails', () => {
			let data: Object | undefined;

			checkThrows(() => expect(data).toExist());
		});

		it('is chainable', () => {
			expect({ id: 1 }).toExist().toExist();
		});
	});

	describe('toNotExist', () => {
		it('does not throw when assertion passes', () => {
			let data: Object | undefined;

			expect(data).toNotExist();
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect({ id: 1 }).toNotExist());
			checkThrows(() => expect({}).toNotExist());

			const data: Object | null = null;
			checkThrows(() => expect(data).toNotExist());
		});

		it('is chainable', () => {
			let data: Object | undefined;

			expect(data).toNotExist().toNotExist();
		});
	});

	describe('toBe', () => {
		it('does not throw when assertion passes', () => {
			const data = { id: 1 };

			expect(data).toBe(data);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect({ id: 1 }).toBe({ id: 1 }));
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

			checkThrows(() =>  expect(data).toNotBe(data));
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
			checkThrows(() => expect({ id: 1 }).toEqual({ id: 2 }));
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
			checkThrows(() => expect({ id: 1 }).toNotEqual({ id: 1 }));
		});

		it('is chainable', () => {
			expect({ id: 1 }).toNotEqual({ id: 2 }).toNotEqual({ id: 1 });
		});
	});

	describe('toInclude / toContain', () => {
		it('does not throw when assertion passes', () => {
			expect({ id: 1, name: 'Object' }).toInclude({ id: 1 });
			expect({ id: 1, name: 'Object' }).toContain({ id: 1 });
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect({ id: 1 }).toInclude({ name: 'Object' }));
			checkThrows(() => expect({ id: 1 }).toContain({ name: 'Object' }));
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
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect({ id: 1 }).toExclude({ id: 1 }));
			checkThrows(() => expect({ id: 1 }).toNotInclude({ id: 1 }));
			checkThrows(() => expect({ id: 1 }).toNotContain({ id: 1 }));
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
			checkThrows(() => expect({ id: 1, name: 'Object' }).toIncludeKey('value'));
			checkThrows(() => expect({ id: 1, name: 'Object' }).toContainKey('value'));
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
			checkThrows(() => expect({ id: 1, name: 'Object' }).toExcludeKey('name'));
			checkThrows(() => expect({ id: 1, name: 'Object' }).toNotIncludeKey('name'));
			checkThrows(() => expect({ id: 1, name: 'Object' }).toNotContainKey('name'));
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
			checkThrows(() => expect({ id: 1, name: 'Object' }).toIncludeKeys(['value', 'location']));
			checkThrows(() => expect({ id: 1, name: 'Object' }).toContainKeys(['value', 'location']));
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
			checkThrows(() => expect({ id: 1, name: 'Object' }).toExcludeKeys(['id', 'name']));
			checkThrows(() => expect({ id: 1, name: 'Object' }).toNotIncludeKeys(['id', 'name']));
			checkThrows(() => expect({ id: 1, name: 'Object' }).toNotContainKeys(['id', 'name']));
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
			checkThrows(() => expect(new EvalError()).toBeA(TypeError));
			checkThrows(() => expect(new TypeError()).toBeAn(EvalError));
			checkThrows(() => expect(new TypeError()).toBeA('number'));
			checkThrows(() => expect(new TypeError()).toBeAn('number'));
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
			checkThrows(() => expect(new TypeError()).toNotBeA(TypeError));
			checkThrows(() => expect(new EvalError()).toNotBeAn(EvalError));
			checkThrows(() => expect(new TypeError()).toNotBeA('object'));
			checkThrows(() => expect(new TypeError()).toNotBeAn('object'));
		});

		it('is chainable', () => {
			expect(new EvalError()).toNotBeA(TypeError).toNotBeA(TypeError);
			expect(new TypeError()).toNotBeAn(EvalError).toNotBeAn(EvalError);
			expect(new TypeError()).toNotBeA('number').toNotBeA('number');
			expect(new TypeError()).toNotBeAn('number').toNotBeAn('number');
		});
	});
});
