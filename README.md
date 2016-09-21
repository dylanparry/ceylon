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

## Using Assertions

### toBe

```typescript
expect(item: boolean).toBe(value: boolean, message?: string): void;
expect(item: number).toBe(value: number, message?: string): void;
expect(item: string).toBe(value: string, message?: string): void;
expect(item: any[]).toBe(value: any[], message?: string): void;
expect(item: Object).toBe(value: Object, message?: string): void;
```

Asserts that tested `item` is strictly equal to `value`.

Outputs optional `message` in case of a failed assertion.

### toNotBe

```typescript
expect(item: boolean).toNotBe(value: boolean, message?: string): void;
expect(item: number).toNotBe(value: number, message?: string): void;
expect(item: string).toNotBe(value: string, message?: string): void;
expect(item: any[]).toNotBe(value: any[], message?: string): void;
expect(item: Object).toNotBe(value: Object, message?: string): void;
```

Asserts that tested `item` is not strictly equal to `value`.

Outputs optional `message` in case of a failed assertion.

### toEqual

```typescript
expect(item: any[]).toEqual(value: any[], message?: string): void;
expect(item: Object).toEqual(value: Object, message?: string): void;
```

Asserts that the tested `item` is deeply equal to `value`. This allows comparison of items that do not share the same reference, but are otherwise equal.

Outputs optional `message` in case of a failed assertion.

### toNotEqual

```typescript
expect(item: any[]).toNotEqual(value: any[], message?: string): void;
expect(item: Object).toNotEqual(value: Object, message?: string): void;
```

Asserts that the tested `item` is not deeply equal to `value`.

Outputs optional `message` in case of a failed assertion.

### toExist

```typescript
expect(item: any[]).toExist(message?: string): void;
expect(item: boolean).toExist(message?: string): void;
expect(item: number).toExist(message?: string): void;
expect(item: string).toExist(message?: string): void;
expect(item: Object).toExist(message?: string): void;
```

Asserts that the tested `item` exists (is not `undefined`).

Outputs optional `message` in case of a failed assertion.

### toNotExist

```typescript
expect(item: any[]).toNotExist(message?: string): void;
expect(item: boolean).toNotExist(message?: string): void;
expect(item: number).toNotExist(message?: string): void;
expect(item: string).toNotExist(message?: string): void;
expect(item: Object).toNotExist(message?: string): void;
```

Asserts that the tested `item` does not exist (is `undefined`).

Outputs optional `message` in case of a failed assertion.

### toThrow

```typescript
expect(item: Function).toThrow(error?: string, message?: string): void;
expect(item: Function).toThrow(error?: Function, message?: string): void
```

Asserts that the tested `item` throws an error when called.

The `error` will be matched against the `error.message` or the type of error (using `instanceof`).

Outputs optional `message` in case of a failed assertion.

#### Example

```typescript
expect(() => { throw new Error('Oh noes!') }).toThrow('Oh noes!', 'Did not throw "Oh noes!"');
expect(() => { throw new ReferenceError() }).toThrow(ReferenceError, 'Did not throw a ReferenceError!');
```

### toNotThrow

```typescript
expect(item: Function).toNotThrow(message?: string): void;
```

Asserts that the tested `item` not not throw an error when called.

Outputs optional `message` in case of a failed assertion.

#### Example

```typescript
expect(() => true).toNotThrow('Function threw an error!');
```

### toBeLessThan

```typescript
expect(item: number).toBeLessThan(value: number, message?: string): void;
```

Asserts that the tested `item` is less than the `value`.

Outputs optional `message` in case of a failed assertion.

### toBeLessThanOrEqualTo

```typescript
expect(item: number).toBeLessThan(value: number, message?: string): void;
```

Asserts that the tested `item` is less than or equal to the `value`.

Outputs optional `message` in case of a failed assertion.

### toBeGreaterThan

```typescript
expect(item: number).toBeGreaterThan(value: number, message?: string): void;
```

Asserts that the tested `item` is greater than the `value`.

Outputs optional `message` in case of a failed assertion.

### toBeGreaterThanOrEqualTo

```typescript
expect(item: number).toBeGreaterThan(value: number, message?: string): void;
```

Asserts that the tested `item` is greater than or equal to the `value`.

Outputs optional `message` in case of a failed assertion.

### More coming soon…
