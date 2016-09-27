import AssertionError from '../src/assertion-error';
import expect from '../src/index';

describe('AssertionError', () => {
    it('returns an Error object', () => {
        const error = AssertionError({
            message: 'Error message',
        });

        expect(error).toBeAn(Error);
    });

    it('sets the error.message property', () => {
        const error = AssertionError({
            message: 'Error message',
        });

        expect(error.message).toBe('Error message');
    });

    it('sets does not set the actual, expected, or showDiff properties when unspecified', () => {
        const error = AssertionError({
            message: 'Error message',
        });

        expect(error['actual']).toNotExist();
        expect(error['expected']).toNotExist();
        expect(error['showDiff']).toNotExist();
    });

    it('sets the actual, expected, and showDiff properties when specified', () => {
        const error = AssertionError({
            actual: 'I ate an apple',
            expected: 'I ate an orange',
            message: 'Error message',
            showDiff: true,
        });

        expect(error['actual']).toBe('I ate an apple');
        expect(error['expected']).toBe('I ate an orange');
        expect(error['showDiff'] as boolean).toBeTrue();
    });
});
