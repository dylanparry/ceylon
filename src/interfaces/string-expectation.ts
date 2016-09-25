import IExpectation from './expectation';

interface IStringExpectation extends IExpectation<string> {
	toMatch(pattern: RegExp, message?: string): this;

	toNotMatch(pattern: RegExp, message?: string): this;

	toInclude(value: string, message?: string): this;
	toContain(value: string, message?: string): this;

	toExclude(value: string, message?: string): this;
	toNotInclude(value: string, message?: string): this;
	toNotContain(value: string, message?: string): this;

	toHaveLength(value: number, message?: string): this;
	toNotHaveLength(value: number, message?: string): this;
}

export default IStringExpectation;
