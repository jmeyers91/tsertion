import {
  assertObject,
  assertObjectNullable,
  assertObjectOptional,
  assertObjectOptionalNullable
} from '../object';

describe('tsertion object', () => {
  test(`assertObject should throw if the value isn't an object`, () => {
    expect(() => assertObject(true)).toThrow();
    expect(() => assertObject([])).toThrow();
    expect(() => assertObject(5)).toThrow();
    expect(() => assertObject('foo')).toThrow();
    expect(() => assertObject(null)).toThrow();
    expect(() => assertObject(undefined)).toThrow();
    expect(() => assertObject(NaN)).toThrow();
  });

  test(`assertObject should not throw if the value is an object`, () => {
    assertObject({});
  });

  test(`assertObjectNullable should throw if the value isn't an object or null`, () => {
    expect(() => assertObjectNullable(true)).toThrow();
    expect(() => assertObjectNullable([])).toThrow();
    expect(() => assertObjectNullable(5)).toThrow();
    expect(() => assertObjectNullable('foo')).toThrow();
    expect(() => assertObjectNullable(undefined)).toThrow();
    expect(() => assertObjectNullable(NaN)).toThrow();
  });

  test(`assertObject should not throw if the value is an object or null`, () => {
    assertObjectNullable(null);
    assertObjectNullable({});
  });

  test(`assertObjectOptional should throw if the value isn't an object or null`, () => {
    expect(() => assertObjectOptional(true)).toThrow();
    expect(() => assertObjectOptional([])).toThrow();
    expect(() => assertObjectOptional(5)).toThrow();
    expect(() => assertObjectOptional('foo')).toThrow();
    expect(() => assertObjectOptional(null)).toThrow();
    expect(() => assertObjectOptional(NaN)).toThrow();
  });

  test(`assertObject should not throw if the value is an object or null`, () => {
    assertObjectOptional(undefined);
    assertObjectOptional({});
  });

  test(`assertObjectOptionalNullable should throw if the value isn't an object or null or undefined`, () => {
    expect(() => assertObjectOptionalNullable(true)).toThrow();
    expect(() => assertObjectOptionalNullable([])).toThrow();
    expect(() => assertObjectOptionalNullable(5)).toThrow();
    expect(() => assertObjectOptionalNullable('foo')).toThrow();
    expect(() => assertObjectOptionalNullable(NaN)).toThrow();
  });

  test(`assertObject should not throw if the value is an object or null or undefined`, () => {
    assertObjectOptionalNullable(null);
    assertObjectOptionalNullable(undefined);
    assertObjectOptionalNullable({});
  });
});
