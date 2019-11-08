import {
  assertString,
  assertStringNullable,
  assertStringOptional,
  assertStringOptionalNullable
} from '../string';

describe('tsertion string', () => {
  test(`assertString should throw if the value isn't an string`, () => {
    expect(() => assertString(1)).toThrow();
    expect(() => assertString([])).toThrow();
    expect(() => assertString({})).toThrow();
    expect(() => assertString(true)).toThrow();
    expect(() => assertString(null)).toThrow();
    expect(() => assertString(undefined)).toThrow();
    expect(() => assertString(NaN)).toThrow();
  });

  test(`assertString should not throw if the value is an string`, () => {
    assertString('foo');
  });

  test(`assertStringNullable should throw if the value isn't an string or null`, () => {
    expect(() => assertStringNullable(1)).toThrow();
    expect(() => assertStringNullable([])).toThrow();
    expect(() => assertStringNullable({})).toThrow();
    expect(() => assertStringNullable(true)).toThrow();
    expect(() => assertStringNullable(undefined)).toThrow();
    expect(() => assertStringNullable(NaN)).toThrow();
  });

  test(`assertString should not throw if the value is an string or null`, () => {
    assertStringNullable(null);
    assertStringNullable('foo');
  });

  test(`assertStringOptional should throw if the value isn't an string or null`, () => {
    expect(() => assertStringOptional(1)).toThrow();
    expect(() => assertStringOptional([])).toThrow();
    expect(() => assertStringOptional({})).toThrow();
    expect(() => assertStringOptional(true)).toThrow();
    expect(() => assertStringOptional(null)).toThrow();
    expect(() => assertStringOptional(NaN)).toThrow();
  });

  test(`assertString should not throw if the value is an string or null`, () => {
    assertStringOptional(undefined);
    assertStringOptional('foo');
  });

  test(`assertStringOptionalNullable should throw if the value isn't an string or null or undefined`, () => {
    expect(() => assertStringOptionalNullable(1)).toThrow();
    expect(() => assertStringOptionalNullable([])).toThrow();
    expect(() => assertStringOptionalNullable(true)).toThrow();
    expect(() => assertStringOptionalNullable({})).toThrow();
    expect(() => assertStringOptionalNullable(NaN)).toThrow();
  });

  test(`assertString should not throw if the value is an string or null or undefined`, () => {
    assertStringOptionalNullable(null);
    assertStringOptionalNullable(undefined);
    assertStringOptionalNullable('foo');
  });
});
