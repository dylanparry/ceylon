import { checkThrows } from '../helpers';
import expect from '../../src/index';

describe('expect(number)', () => {
	describe('toExist', () => {
		it('does not throw when assertion passes', () => {
			expect(100).toExist();
			expect(-100).toExist();
			expect(0).toExist();
			expect(0.5).toExist();
			expect(null as number).toExist();
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect(undefined as number).toExist());
		});

		it('is chainable', () => {
			expect(100).toExist().toExist();
		});
	});

	describe('toNotExist', () => {
		it('does not throw when assertion passes', () => {
			expect(undefined as number).toNotExist();
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect(100).toNotExist());
			checkThrows(() => expect(-100).toNotExist());
			checkThrows(() => expect(0).toNotExist());
			checkThrows(() => expect(0.5).toNotExist());
			checkThrows(() => expect(null as number).toNotExist());
		});

		it('is chainable', () => {
			expect(undefined as number).toNotExist().toNotExist();
		});
	});

	describe('toBe', () => {
		it('does not throw when assertion passes', () => {
			expect(100).toBe(100);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect(100).toBe(50));
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
			checkThrows(() =>  expect(100).toNotBe(100));
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
			checkThrows(() => expect(100).toEqual(50));
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
			checkThrows(() => expect(100).toNotEqual(100));
		});

		it('is chainable', () => {
			expect(100).toNotEqual(50).toNotEqual(50);
		});
	});

	describe('toBeLessThan', () => {
		it('does not throw when assertion passes', () => {
			expect(100).toBeLessThan(200);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect(100).toBeLessThan(50));
			checkThrows(() => expect(100).toBeLessThan(100));
		});

		it('is chainable', () => {
			expect(100).toBeLessThan(200).toBeLessThan(200);
		});
	});

	describe('toBeLessThanOrEqualTo', () => {
		it('does not throw when assertion passes', () => {
			expect(100).toBeLessThanOrEqualTo(200);
			expect(100).toBeLessThanOrEqualTo(100);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect(100).toBeLessThanOrEqualTo(50));
		});

		it('is chainable', () => {
			expect(100).toBeLessThanOrEqualTo(200).toBeLessThanOrEqualTo(200);
		});
	});

	describe('toBeGreaterThan', () => {
		it('does not throw when assertion passes', () => {
			expect(200).toBeGreaterThan(100);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect(100).toBeGreaterThan(200));
			checkThrows(() => expect(100).toBeGreaterThan(100));
		});

		it('is chainable', () => {
			expect(200).toBeGreaterThan(100).toBeGreaterThan(100);
		});
	});

	describe('toBeGreaterThanOrEqualTo', () => {
		it('does not throw when assertion passes', () => {
			expect(200).toBeGreaterThanOrEqualTo(100);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect(100).toBeGreaterThanOrEqualTo(200));
			checkThrows(() => expect(100).toBeGreaterThanOrEqualTo(100));
		});

		it('is chainable', () => {
			expect(200).toBeGreaterThanOrEqualTo(100).toBeGreaterThanOrEqualTo(100);
		});
	});
});
