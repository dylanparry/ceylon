import { checkThrows } from '../helpers';

import expect from '../../src/index';

describe('expect(array)', () => {
	describe('toExist', () => {
		it('does not throw', () => {
			expect([1, 2, 3]).toExist();
			expect([]).toExist();
		});

		it('is chainable', () => {
			expect([1, 2, 3]).toExist().toExist();
		});
	});

	describe('toNotExist', () => {
		it('throws', () => {
			checkThrows(() => expect([1, 2, 3]).toNotExist());
			checkThrows(() => expect([]).toNotExist());
		});
	});

	describe('toBe', () => {
		it('does not throw when assertion passes', () => {
			const data = [1, 2, 3];

			expect(data).toBe(data);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect([1, 2, 3]).toBe([1, 2, 3]));
		});

		it('is chainable', () => {
			const data = [1, 2, 3];

			expect(data).toBe(data).toBe(data);
		});
	});

	describe('toNotBe', () => {
		it('does not throw when assertion passes', () => {
			expect([1, 2, 3]).toNotBe([1, 2, 3]);
		});

		it('throws when assertion fails', () => {
			const data = [1, 2, 3];

			checkThrows(() =>  expect(data).toNotBe(data));
		});

		it('is chainable', () => {
			expect([1, 2, 3]).toNotBe([1, 2, 3]).toNotBe([1, 2, 3]);
		});
	});

	describe('toEqual', () => {
		it('does not throw when assertion passes', () => {
			expect([1, 2, 3]).toEqual([1, 2, 3]);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect([1, 2, 3]).toEqual([1, 2]));
		});

		it('is chainable', () => {
			expect([1, 2, 3]).toEqual([1, 2, 3]).toEqual([1, 2, 3]);
		});
	});

	describe('toNotEqual', () => {
		it('does not throw when assertion passes', () => {
			expect([1, 2, 3]).toNotEqual([1, 2]);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect([1, 2, 3]).toNotEqual([1, 2, 3]));
		});

		it('is chainable', () => {
			expect([1, 2, 3]).toNotEqual([1, 2]).toNotEqual([1, 2]);
		});
	});

	describe('toBeA / toBeAn', () => {
		it('does not throw when assertion passes', () => {
			expect([1, 2, 3]).toBeA('object');
			expect([1, 2, 3]).toBeAn('object');
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect([1, 2, 3]).toBeA('number'));
			checkThrows(() => expect([1, 2, 3]).toBeAn('number'));
		});

		it('is chainable', () => {
			expect([1, 2, 3]).toBeA('object').toBeA('object');
		});
	});

	describe('toNotBeA / toNotBeAn', () => {
		it('does not throw when assertion passes', () => {
			expect([1, 2, 3]).toNotBeA('number');
			expect([1, 2, 3]).toNotBeAn('number');
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect([1, 2, 3]).toNotBeA('object'));
			checkThrows(() => expect([1, 2, 3]).toNotBeAn('object'));
		});

		it('is chainable', () => {
			expect([1, 2, 3]).toNotBeA('number').toNotBeA('number');
		});
	});

	describe('toInclude / toContain', () => {
		it('does not thrown when assertion passes', () => {
			expect([1, 2, 3]).toInclude(2);
			expect([1, 2, 3]).toContain(2);

			expect([
				[1, 2, 3],
				[4, 5, 5],
				[7, 8, 9],
			]).toInclude([1, 2, 3]);

			expect([
				[1, 2, 3],
				[4, 5, 5],
				[7, 8, 9],
			]).toContain([1, 2, 3]);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect([1, 2, 3]).toInclude(4));
			checkThrows(() => expect([1, 2, 3]).toContain(4));

			checkThrows(() => expect([
				[4, 5, 5],
				[7, 8, 9],
			]).toInclude([1, 2, 3]));

			checkThrows(() => expect([
				[4, 5, 5],
				[7, 8, 9],
			]).toContain([1, 2, 3]));
		});

		it('throws when called on a non-array', () => {
			checkThrows(() => expect(undefined)['toInclude'](1));
			checkThrows(() => expect(undefined)['toContain'](1));
		});

		it('is chainable', () => {
			expect([1, 2, 3]).toInclude(1).toInclude(1);
			expect([1, 2, 3]).toContain(1).toContain(1);
		});
	});

	describe('toExclude / toNotInclude / toNotContain', () => {
		it('does not throw when assertion passes', () => {
			expect([1, 2, 3]).toExclude(4);
			expect([1, 2, 3]).toNotInclude(4);
			expect([1, 2, 3]).toNotContain(4);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect([1, 2, 3]).toExclude(2));
			checkThrows(() => expect([1, 2, 3]).toNotInclude(2));
			checkThrows(() => expect([1, 2, 3]).toNotContain(2));
		});

		it('throws when called on a non-array', () => {
			checkThrows(() => expect(undefined)['toExclude'](1));
			checkThrows(() => expect(undefined)['toNotInclude'](1));
			checkThrows(() => expect(undefined)['toNotContain'](1));
		});

		it('is chainable', () => {
			expect([1, 2, 3]).toExclude(4).toExclude(4);
			expect([1, 2, 3]).toNotInclude(4).toNotInclude(4);
			expect([1, 2, 3]).toNotContain(4).toNotContain(4);
		});
	});

	describe('toIncludeKey / toContainKey', () => {
		it('does not throw when assertion passes', () => {
			expect([1, 2, 3]).toIncludeKey(0);
			expect([1, 2, 3]).toContainKey(0);
		});

		it('throws error when assertion fails', () => {
			checkThrows(() => expect([1, 2, 3]).toIncludeKey(3));
			checkThrows(() => expect([1, 2, 3]).toContainKey(3));
		});

		it('throws when called on a non-array', () => {
			checkThrows(() => expect(undefined)['toIncludeKey'](1));
			checkThrows(() => expect(undefined)['toContainKey'](1));
		});

		it('is chainable', () => {
			expect([1, 2, 3]).toIncludeKey(0).toIncludeKey(0);
			expect([1, 2, 3]).toContainKey(0).toContainKey(0);
		});
	});

	describe('toExcludeKey / toNotIncludeKey / toNotContainKey', () => {
		it('does not throw when assertion passes', () => {
			expect([1, 2, 3]).toExcludeKey(3);
			expect([1, 2, 3]).toNotIncludeKey(3);
			expect([1, 2, 3]).toNotContainKey(3);
		});

		it('throws error when assertion fails', () => {
			checkThrows(() => expect([1, 2, 3]).toExcludeKey(0));
			checkThrows(() => expect([1, 2, 3]).toNotIncludeKey(0));
			checkThrows(() => expect([1, 2, 3]).toNotContainKey(0));
		});

		it('throws when called on a non-array', () => {
			checkThrows(() => expect(undefined)['toExcludeKey'](1));
			checkThrows(() => expect(undefined)['toNotIncludeKey'](1));
			checkThrows(() => expect(undefined)['toNotContainKey'](1));
		});

		it('is chainable', () => {
			expect([1, 2, 3]).toExcludeKey(3).toExcludeKey(3);
			expect([1, 2, 3]).toNotIncludeKey(3).toNotContainKey(3);
			expect([1, 2, 3]).toNotContainKey(3).toNotContainKey(3);
		});
	});

	describe('toIncludeKeys / toContainKeys', () => {
		it('does not throw when assertion passes', () => {
			expect([1, 2, 3]).toIncludeKeys([0, 1]);
			expect([1, 2, 3]).toContainKeys([0, 1]);
		});

		it('throws error when assertion fails', () => {
			checkThrows(() => expect([1, 2, 3]).toIncludeKeys([3, 4]));
			checkThrows(() => expect([1, 2, 3]).toContainKeys([3, 4]));
		});

		it('throws when called on a non-array', () => {
			checkThrows(() => expect(undefined)['toIncludeKeys'](1));
			checkThrows(() => expect(undefined)['toContainKeys'](1));
		});

		it('is chainable', () => {
			expect([1, 2, 3]).toIncludeKeys([0, 1]).toIncludeKeys([0, 1]);
			expect([1, 2, 3]).toContainKeys([0, 1]).toContainKeys([0, 1]);
		});
	});

	describe('toExcludeKeys / toNotIncludeKeys / toNotContainKeys', () => {
		it('does not throw when assertion passes', () => {
			expect([1, 2, 3]).toExcludeKeys([3, 4]);
			expect([1, 2, 3]).toNotIncludeKeys([3, 4]);
			expect([1, 2, 3]).toNotContainKeys([3, 4]);
		});

		it('throws error when assertion fails', () => {
			checkThrows(() => expect([1, 2, 3]).toExcludeKeys([0, 1]));
			checkThrows(() => expect([1, 2, 3]).toNotIncludeKeys([0, 1]));
			checkThrows(() => expect([1, 2, 3]).toNotContainKeys([0, 1]));
		});

		it('throws when called on a non-array', () => {
			checkThrows(() => expect(undefined)['toExcludeKeys'](1));
			checkThrows(() => expect(undefined)['toNotIncludeKeys'](1));
			checkThrows(() => expect(undefined)['toNotContainKeys'](1));
		});

		it('is chainable', () => {
			expect([1, 2, 3]).toExcludeKeys([3, 4]).toExcludeKeys([3, 4]);
			expect([1, 2, 3]).toNotIncludeKeys([3, 4]).toNotContainKeys([3, 4]);
			expect([1, 2, 3]).toNotContainKeys([3, 4]).toNotContainKeys([3, 4]);
		});
	});

	describe('toHaveLength', () => {
		it('does not throw when assertion passes', () => {
			expect([1, 2, 3]).toHaveLength(3);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect([1, 2, 3]).toHaveLength(2));
		});

		it('throws when called on a non-array', () => {
			checkThrows(() => expect(undefined)['toHaveLength'](2));
		});

		it('is chainable', () => {
			expect([1, 2, 3]).toHaveLength(3).toHaveLength(3);
		});
	});

	describe('toNotHaveLength', () => {
		it('does not throw when assertion passes', () => {
			expect([1, 2, 3]).toNotHaveLength(2);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect([1, 2, 3]).toNotHaveLength(3));
		});

		it('throws when called on a non-array', () => {
			checkThrows(() => expect(undefined)['toNotHaveLength'](2));
		});

		it('is chainable', () => {
			expect([1, 2, 3]).toNotHaveLength(2).toNotHaveLength(2);
		});
	});
});
