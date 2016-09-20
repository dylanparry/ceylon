# Ceylon [![Travis][build-badge]][build] [![npm package][npm-badge]][npm]

[build-badge]: https://img.shields.io/travis/dylanparry/ceylon/master.svg?style=flat-square
[build]: https://travis-ci.org/dylanparry/ceylon

[npm-badge]: https://img.shields.io/npm/v/ceylon.svg?style=flat-square
[npm]: https://www.npmjs.org/package/ceylon

**This library is currently in development and should not be used (yet)**

Ceylon is an assertion library for unit testing written in Typescript.

It is based upon the API for [expect](https://github.com/mjackson/expect/), with the added bonus of full Typescript definitions, meaning there's no need to go looking for a d.ts file.

Ceylon aims to simplify unit testing in Typescript by making it easy to write assertions.

## Installation

Using [npm](https://www.npmjs.com/package/ceylon):

    npm install --save-dev ceylon

Then import into your Typescript code like so:

```typescript
import expect from 'ceylon';
```

There is no need to reference a Typescript definition file as the source code for Ceylon is all written in Typescript.

## Assertions

### toBe

```typescript
expect(object: boolean).toBe(value: boolean, message?: string): void;
expect(object: number).toBe(value: number, message?: string): void;
expect(object: string).toBe(value: string, message?: string): void;
expect(object: any[]).toBe(value: any[], message?: string): void;
expect(object: Object).toBe(value: Object, message?: string): void;
```

Asserts that `object` is strictly equal to `value` using `===`.

Outputs optional `message` in case of a failed assertion.

### toNotBe

```typescript
expect(object: boolean).toNotBe(value: boolean, message?: string): void;
expect(object: number).toNotBe(value: number, message?: string): void;
expect(object: string).toNotBe(value: string, message?: string): void;
expect(object: any[]).toNotBe(value: any[], message?: string): void;
expect(object: Object).toNotBe(value: Object, message?: string): void;
```

Asserts that `object` is not strictly equal to `value` using `!==`.

Outputs optional `message` in case of a failed assertion.

### toExist

```typescript
expect(object: any[]).toExist(message?: string): void;
expect(object: boolean).toExist(message?: string): void;
expect(object: number).toExist(message?: string): void;
expect(object: string).toExist(message?: string): void;
expect(object: Object).toExist(message?: string): void;
```

Asserts that the `object` exists (is not `undefined`).

Outputs optional `message` in case of a failed assertion.

### toNotExist

```typescript
expect(object: any[]).toNotExist(message?: string): void;
expect(object: boolean).toNotExist(message?: string): void;
expect(object: number).toNotExist(message?: string): void;
expect(object: string).toNotExist(message?: string): void;
expect(object: Object).toNotExist(message?: string): void;
```

Asserts that the `object` does not exist (is `undefined`).

Outputs optional `message` in case of a failed assertion.

### toThrow

```typescript
expect(function: Function).toThrow(error?: string | Error, message?: string): void;
```

Asserts that the `function` throws an error when called.

The `error` will be matched against the `error.message` or the type of error (using `instanceof`).

Outputs optional `message` in case of a failed assertion.

#### Example

```typescript
expect(() => { throw new Error('Oh noes!') }).toThrow('Oh noes!', 'Did not throw "Oh noes!"');
expect(() => { throw new ReferenceError() }).toThrow(ReferenceError, 'Did not throw a ReferenceError!');
```

### toNotThrow

```typescript
expect(function: Function).toNotThrow(message?: string): void;
```

Asserts that the `function` not not throw an error when called.

Outputs optional `message` in case of a failed assertion.

#### Example

```typescript
expect(() => true).toNotThrow('Function threw an error!');
```

### More coming soon…