import assert from '../src/assert';
import expect from '../src/index';

describe('Assert', () => {
    it('does not throw when assertion passes', () => {
        assert({
            assertion: true,
            message: 'This should not throw',
        });
    });

    it('throws when the assertion fails', () => {
        expect(() => assert({
            assertion: false,
            message: 'This should throw',
        })).toThrow();
    });

    it('throws error with correct message property', () => {
        expect(() => assert({
            assertion: false,
            message: 'This should throw',
        })).toThrow('This should throw');
    });

    it('throws error with showDiff set to false', () => {
        try {
            assert({
                assertion: false,
                message: 'This should throw',
            });
        }
        catch (e) {
            expect(e['showDiff'] as boolean).toBeFalse();
        }
    });

    it('throws error with correct actual/expected/showDiff properties', () => {
        try {
            assert({
                actual: 1,
                assertion: false,
                expected: 2,
                message: 'This should throw',
            });
        }
        catch (e) {
            expect(e['actual']).toBe(1);
            expect(e['expected']).toBe(2);
            expect(e['showDiff'] as boolean).toBeTrue();
        }
    });
});
