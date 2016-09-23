import { checkThrows } from '../helpers';
import expect from '../../src/index';

// Function for testing keys
const testFunction = () => {
	this.id = 1;
	this.name = 'Test Function';
};

describe('expect(Function)', () => {
	describe('toExist', () => {
		it('does not throw when assertion passes', () => {
			expect(Math.random).toExist();
		});

		it('throws when assertion fails', () => {
			let data: Function | undefined;

			checkThrows(() => expect(data).toExist());
		});

		it('is chainable', () => {
			expect(Math.random).toExist().toExist();
		});
	});

	describe('toNotExist', () => {
		it('does not throw when assertion passes', () => {
			let data: Function | undefined;

			expect(data).toNotExist();
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect(Math.random).toNotExist());
		});

		it('is chainable', () => {
			let data: Function | undefined;

			expect(data).toNotExist().toNotExist();
		});
	});

	describe('toBe', () => {
		it('does not throw when assertion passes', () => {
			expect(Math.random).toBe(Math.random);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect(Math.random).toBe(Math.floor));
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

		it('is chainable', () => {
			expect(Math.random).toNotEqual(Math.floor).toNotEqual(Math.floor);
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

		it('is chainable', () => {
			expect(() => Math.random()).toNotThrow().toNotThrow();
		});
	});

	describe('toIncludeKey / toContainKey', () => {
		it('does not throw when assertion passes', () => {
			expect(testFunction).toIncludeKey('name');
		});

		it('throws error when assertion fails', () => {
			checkThrows(() => expect(testFunction).toIncludeKey('value'));
			checkThrows(() => expect(testFunction).toContainKey('value'));
		});

		it('is chainable', () => {
			expect(testFunction).toIncludeKey('name').toIncludeKey('name');
			expect(testFunction).toContainKey('name').toContainKey('name');
		});
	});

	describe('toExcludeKey / toNotIncludeKey / toNotContainKey', () => {
		it('does not throw when assertion passes', () => {
			expect(testFunction).toExcludeKey('value');
			expect(testFunction).toNotIncludeKey('value');
			expect(testFunction).toNotContainKey('value');
		});

		it('throws error when assertion fails', () => {
			checkThrows(() => expect(testFunction).toExcludeKey('name'));
			checkThrows(() => expect(testFunction).toNotIncludeKey('name'));
			checkThrows(() => expect(testFunction).toNotContainKey('name'));
		});

		it('is chainable', () => {
			expect(testFunction).toExcludeKey('value').toExcludeKey('value');
			expect(testFunction).toNotIncludeKey('value').toNotContainKey('value');
			expect(testFunction).toNotContainKey('value').toNotContainKey('value');
		});
	});

	describe('toIncludeKeys / toContainKeys', () => {
		it('does not throw when assertion passes', () => {
			expect(testFunction).toIncludeKeys(['name', 'id']);
			expect(testFunction).toContainKeys(['name', 'id']);
		});

		it('throws error when assertion fails', () => {
			checkThrows(() => expect(testFunction).toIncludeKeys(['value', 'location']));
			checkThrows(() => expect(testFunction).toContainKeys(['value', 'location']));
		});

		it('is chainable', () => {
			expect(testFunction).toIncludeKeys(['name', 'id']).toIncludeKeys(['name', 'id']);
			expect(testFunction).toContainKeys(['name', 'id']).toContainKeys(['name', 'id']);
		});
	});

	describe('toExcludeKeys / toNotIncludeKeys / toNotContainKeys', () => {
		it('does not throw when assertion passes', () => {
			expect(testFunction).toExcludeKeys(['value', 'location']);
			expect(testFunction).toNotIncludeKeys(['value', 'location']);
			expect(testFunction).toNotContainKeys(['value', 'location']);
		});

		it('throws error when assertion fails', () => {
			checkThrows(() => expect(testFunction).toExcludeKeys(['name', 'id']));
			checkThrows(() => expect(testFunction).toNotIncludeKeys(['name', 'id']));
			checkThrows(() => expect(testFunction).toNotContainKeys(['name', 'id']));
		});

		it('is chainable', () => {
			expect(testFunction).toExcludeKeys(['value', 'location']).toExcludeKeys(['value', 'location']);
			expect(testFunction).toNotIncludeKeys(['value', 'location']).toNotContainKeys(['value', 'location']);
			expect(testFunction).toNotContainKeys(['value', 'location']).toNotContainKeys(['value', 'location']);
		});
	});
});
