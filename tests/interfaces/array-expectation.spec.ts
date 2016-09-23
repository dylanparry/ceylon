import { checkThrows } from '../helpers';

import expect from '../../src/index';

describe('expect(array)', () => {
	describe('toExist', () => {
		it('does not throw when assertion passes', () => {
			expect([1, 2, 3]).toExist();
			expect([]).toExist();

			const data: any[] | null = null;
			expect(data).toExist();
		});

		it('throws when assertion fails', () => {
			let data: any[] | undefined;
			checkThrows(() => expect(data).toExist());
		});

		it('is chainable', () => {
			expect([1, 2, 3]).toExist().toExist();
		});
	});

	describe('toNotExist', () => {
		it('does not throw when assertion passes', () => {
			let data: any[] | undefined;
			expect(data).toNotExist();
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect([1, 2, 3]).toNotExist());
			checkThrows(() => expect([]).toNotExist());

			const data: any[] | null = null;
			checkThrows(() => expect(data).toNotExist());
		});

		it('is chainable', () => {
			let data: any[] | undefined;

			expect(data).toNotExist().toNotExist();
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

		it('is chainable', () => {
			expect([1, 2, 3]).toExcludeKeys([3, 4]).toExcludeKeys([3, 4]);
			expect([1, 2, 3]).toNotIncludeKeys([3, 4]).toNotContainKeys([3, 4]);
			expect([1, 2, 3]).toNotContainKeys([3, 4]).toNotContainKeys([3, 4]);
		});
	});
});
