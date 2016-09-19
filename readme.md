# Ceylon

**This library is currently in development and should not be used (yet)**

Ceylon is an assertion library for unit testing written in Typescript.

It is based upon the API for [expect](https://github.com/mjackson/expect/), with the added bonus of full Typescript definitions, meaning there's no need to go looking for a d.ts file.

Ceylon aims to simplify unit testing in Typescript by making it easy to write assertions.

## Installation

Using [npm](https://www.npmjs.com/package/ceylon):

    npm install --save ceylon

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
expect(object: Function).toBe(value: Function, message?: string): void;
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
expect(object: Function).toNotBe(value: Function, message?: string): void;
expect(object: Object).toNotBe(value: Object, message?: string): void;
```

Asserts that `object` is not strictly equal to `value` using `!==`.

Outputs optional `message` in case of a failed assertion.

### toExist

```typescript
expect(object: Object).toExist(message?: string): void;
```

Asserts that the `object` exists (is not `undefined`).

Outputs optional `message` in case of a failed assertion.

### toNotExist

```typescript
expect(object: Object).toNotExist(message?: string): void;
```

Asserts that the `object` does not exist (is `undefined`).

Outputs optional `message` in case of a failed assertion.

### More coming soon…