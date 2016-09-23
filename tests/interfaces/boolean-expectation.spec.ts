import { checkThrows } from '../helpers';
import expect from '../../src/index';

describe('expect(boolean)', () => {
	describe('toExist', () => {
		it('does not throw', () => {
			expect(true).toExist();
			expect(false).toExist();
		});

		it('is chainable', () => {
			expect(true).toExist().toExist();
		});
	});

	describe('toNotExist', () => {
		it('throws', () => {
			checkThrows(() => expect(true).toNotExist());
			checkThrows(() => expect(false).toNotExist());
		});
	});

	describe('toBe', () => {
		it('does not throw when assertion passes', () => {
			expect(true).toBe(true);
			expect(false).toBe(false);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect(true).toBe(false));
		});

		it('is chainable', () => {
			expect(true).toBe(true).toBe(true);
		});
	});

	describe('toNotBe', () => {
		it('does not throw when assertion passes', () => {
			expect(true).toNotBe(false);
		});

		it('throws when assertion fails', () => {
			checkThrows(() =>  expect(true).toNotBe(true));
		});

		it('is chainable', () => {
			expect(true).toNotBe(false).toNotBe(false);
		});
	});

	describe('toEqual', () => {
		it('does not throw when assertion passes', () => {
			expect(true).toEqual(true);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect(true).toEqual(false));
		});

		it('is chainable', () => {
			expect(true).toEqual(true).toEqual(true);
		});
	});

	describe('toNotEqual', () => {
		it('does not throw when assertion passes', () => {
			expect(true).toNotEqual(false);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect(true).toNotEqual(true));
		});

		it('is chainable', () => {
			expect(true).toNotEqual(false).toNotEqual(false);
		});
	});

	describe('toBeTrue', () => {
		it('does not throw when assertion passes', () => {
			expect(true).toBeTrue();
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect(false).toBeTrue());
		});

		it('throws when called on a non-boolean', () => {
			checkThrows(() => expect(undefined)['toBeTrue']());
		});

		it('is chainable', () => {
			expect(true).toBeTrue().toBeTrue();
		});
	});

	describe('toBeFalse', () => {
		it('does not throw when assertion passes', () => {
			expect(false).toBeFalse();
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect(true).toBeFalse());
		});

		it('throws when called on a non-boolean', () => {
			checkThrows(() => expect(undefined)['toBeFalse']());
		});

		it('is chainable', () => {
			expect(false).toBeFalse().toBeFalse();
		});
	});
});
