# Ceylon [![Travis][build-badge]][build] [![npm package][npm-badge]][npm]

[build-badge]: https://img.shields.io/travis/dylanparry/ceylon/master.svg?style=flat-square
[build]: https://travis-ci.org/dylanparry/ceylon

[npm-badge]: https://img.shields.io/npm/v/ceylon.svg?style=flat-square
[npm]: https://www.npmjs.org/package/ceylon

![Ceylon](https://github.com/dylanparry/ceylon/blob/master/logo.png)

Ceylon is an assertion library for unit testing written in Typescript. It can be used in Typescript or in plain old JavaScript.

It is based upon the API for [expect](https://github.com/mjackson/expect/), with the added bonus of full Typescript definitions, meaning there's no need to go looking for a d.ts file.

Ceylon aims to simplify unit testing in Typescript by making it easy to write assertions.

## Example Usage

```typescript
import expect from 'ceylon';

expect(100)
    .toExist()
	.toBeA('number')
	.toBeLessThan(200)
	.toBeGreaterThan(5)
	.toNotBe(90);
```

For a complete reference visit the [Ceylon Wiki](https://github.com/dylanparry/ceylon/wiki).
