# Tsertion

[![Build Status](https://travis-ci.com/jmeyers91/tsertion.svg?branch=master)](https://travis-ci.com/jmeyers91/tsertion)

Low level type guards and assertions for typescript.

## Install

```
npm install tsertion
```

## Usage

```ts
import { assertString, getObject, getArray, getNumber } from 'tsertion';

const a: unknown = 'foo';
const b: unknown = null;
const c: unknown = [1, 2, 3];

assertString(a, 'a');

console.log(a.trim());
console.log(getObject(b, 'b').foo); // throws a runtime type error
console.log(
  getArray(c, 'c')
    .map(value => getNumber(value))
    .reduce((a, b) => a + b, 0)
);
```

## API

### string

#### `assertString(value: unknown, name?: string): asserts value is string`

Throws if `value` isn't a string.

#### `assertStringOptional(value: unknown, name?: string): asserts value is (string | undefined)`

Throws if `value` isn't a string or undefined.

#### `assertStringNullable(value: unknown, name?: string): asserts value is (string | null)`

Throws if `value` isn't a string or null.

#### `assertStringOptionalNullable(value: unknown, name?: string): asserts value is (string | undefined | null)`

Throws if `value` isn't a string or undefined. or null.

#### `getString(value: unknown, name?: string): string`

Throws if `value` isn't a string. Otherwise returns `value`.

#### `getStringOptional(value: unknown, name?: string): string | undefined`

Throws if `value` isn't a string or undefined. Otherwise returns `value`.

#### `getStringNullable(value: unknown, name?: string): string | null`

Throws if `value` isn't a string or null. Otherwise returns `value`.

#### `getStringOptionalNullable(value: unknown, name?: string): string | undefined | null`

Throws if `value` isn't a string or undefined. Otherwise returns `value`.

### number

#### `assertNumber(value: unknown, name?: string): asserts value is number`

Throws if `value` isn't a number.

#### `assertNumberOptional(value: unknown, name?: string): asserts value is (number | undefined)`

Throws if `value` isn't a number or undefined.

#### `assertNumberNullable(value: unknown, name?: string): asserts value is (number | null)`

Throws if `value` isn't a number or null.

#### `assertNumberOptionalNullable(value: unknown, name?: string): asserts value is (number | undefined | null)`

Throws if `value` isn't a number or undefined. or null.

#### `getNumber(value: unknown, name?: string): number`

Throws if `value` isn't a number. Otherwise returns `value`.

#### `getNumberOptional(value: unknown, name?: string): number | undefined`

Throws if `value` isn't a number or undefined. Otherwise returns `value`.

#### `getNumberNullable(value: unknown, name?: string): number | null`

Throws if `value` isn't a number or null. Otherwise returns `value`.

#### `getNumberOptionalNullable(value: unknown, name?: string): number | undefined | null`

Throws if `value` isn't a number or undefined. Otherwise returns `value`.

### boolean

#### `assertBoolean(value: unknown, name?: string): asserts value is boolean`

Throws if `value` isn't a boolean.

#### `assertBooleanOptional(value: unknown, name?: string): asserts value is (boolean | undefined)`

Throws if `value` isn't a boolean or undefined.

#### `assertBooleanNullable(value: unknown, name?: string): asserts value is (boolean | null)`

Throws if `value` isn't a boolean or null.

#### `assertBooleanOptionalNullable(value: unknown, name?: string): asserts value is (boolean | undefined | null)`

Throws if `value` isn't a boolean or undefined. or null.

#### `getBoolean(value: unknown, name?: string): boolean`

Throws if `value` isn't a boolean. Otherwise returns `value`.

#### `getBooleanOptional(value: unknown, name?: string): boolean | undefined`

Throws if `value` isn't a boolean or undefined. Otherwise returns `value`.

#### `getBooleanNullable(value: unknown, name?: string): boolean | null`

Throws if `value` isn't a boolean or null. Otherwise returns `value`.

#### `getBooleanOptionalNullable(value: unknown, name?: string): boolean | undefined | null`

Throws if `value` isn't a boolean or undefined. Otherwise returns `value`.

### object

#### `assertObject(value: unknown, name?: string): asserts value is Record<any, unknown>`

Throws if `value` isn't an object.

#### `assertObjectOptional(value: unknown, name?: string): asserts value is (Record<any, unknown> | undefined)`

Throws if `value` isn't an object or undefined.

#### `assertObjectNullable(value: unknown, name?: string): asserts value is (Record<any, unknown> | null)`

Throws if `value` isn't an object or null.

#### `assertObjectOptionalNullable(value: unknown, name?: string): asserts value is (Record<any, unknown> | undefined | null)`

Throws if `value` isn't an object or undefined. or null.

#### `getObject(value: unknown, name?: string): Record<any, unknown>`

Throws if `value` isn't an object. Otherwise returns `value`.

#### `getObjectOptional(value: unknown, name?: string): Record<any, unknown> | undefined`

Throws if `value` isn't an object or undefined. Otherwise returns `value`.

#### `getObjectNullable(value: unknown, name?: string): Record<any, unknown> | null`

Throws if `value` isn't an object or null. Otherwise returns `value`.

#### `getObjectOptionalNullable(value: unknown, name?: string): Record<any, unknown> | undefined | null`

Throws if `value` isn't an object or undefined. Otherwise returns `value`.

### array

#### `assertArray(value: unknown, name?: string): asserts value is unknown[]`

Throws if `value` isn't an array.

#### `assertArrayOptional(value: unknown, name?: string): asserts value is (unknown[] | undefined)`

Throws if `value` isn't an array or undefined.

#### `assertArrayNullable(value: unknown, name?: string): asserts value is (unknown[] | null)`

Throws if `value` isn't an array or null.

#### `assertArrayOptionalNullable(value: unknown, name?: string): asserts value is (unknown[] | undefined | null)`

Throws if `value` isn't an array or undefined. or null.

#### `getArray(value: unknown, name?: string): unknown[]`

Throws if `value` isn't an array. Otherwise returns `value`.

#### `getArrayOptional(value: unknown, name?: string): unknown[] | undefined`

Throws if `value` isn't an array or undefined. Otherwise returns `value`.

#### `getArrayNullable(value: unknown, name?: string): unknown[] | null`

Throws if `value` isn't an array or null. Otherwise returns `value`.

#### `getArrayOptionalNullable(value: unknown, name?: string): unknown | undefined | null`

Throws if `value` isn't an array or undefined. Otherwise returns `value`.
