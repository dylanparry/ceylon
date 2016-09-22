import IExpectation from './expectation';

interface INumberExpectation extends IExpectation<number> {
	toBeLessThan(value: number, message?: string): this;
	toBeLessThanOrEqualTo(value: number, message?: string): this;
	toBeGreaterThan(value: number, message?: string): this;
	toBeGreaterThanOrEqualTo(value: number, message?: string): this;
}

export default INumberExpectation;
