import {
  assertNumber,
  assertNumberNullable,
  assertNumberOptional,
  assertNumberOptionalNullable
} from '../number';

describe('tsertion number', () => {
  test(`assertNumber should throw if the value isn't an number`, () => {
    expect(() => assertNumber(true)).toThrow();
    expect(() => assertNumber([])).toThrow();
    expect(() => assertNumber({})).toThrow();
    expect(() => assertNumber('foo')).toThrow();
    expect(() => assertNumber(null)).toThrow();
    expect(() => assertNumber(undefined)).toThrow();
    expect(() => assertNumber(NaN)).toThrow();
  });

  test(`assertNumber should not throw if the value is an number`, () => {
    assertNumber(1);
    assertNumber(0);
  });

  test(`assertNumberNullable should throw if the value isn't an number or null`, () => {
    expect(() => assertNumberNullable(true)).toThrow();
    expect(() => assertNumberNullable([])).toThrow();
    expect(() => assertNumberNullable({})).toThrow();
    expect(() => assertNumberNullable('foo')).toThrow();
    expect(() => assertNumberNullable(undefined)).toThrow();
    expect(() => assertNumberNullable(NaN)).toThrow();
  });

  test(`assertNumber should not throw if the value is an number or null`, () => {
    assertNumberNullable(null);
    assertNumberNullable(1);
    assertNumberNullable(0);
  });

  test(`assertNumberOptional should throw if the value isn't an number or null`, () => {
    expect(() => assertNumberOptional(true)).toThrow();
    expect(() => assertNumberOptional([])).toThrow();
    expect(() => assertNumberOptional({})).toThrow();
    expect(() => assertNumberOptional('foo')).toThrow();
    expect(() => assertNumberOptional(null)).toThrow();
    expect(() => assertNumberOptional(NaN)).toThrow();
  });

  test(`assertNumber should not throw if the value is an number or null`, () => {
    assertNumberOptional(undefined);
    assertNumberOptional(1);
    assertNumberOptional(0);
  });

  test(`assertNumberOptionalNullable should throw if the value isn't an number or null or undefined`, () => {
    expect(() => assertNumberOptionalNullable(true)).toThrow();
    expect(() => assertNumberOptionalNullable([])).toThrow();
    expect(() => assertNumberOptionalNullable({})).toThrow();
    expect(() => assertNumberOptionalNullable('foo')).toThrow();
    expect(() => assertNumberOptionalNullable(NaN)).toThrow();
  });

  test(`assertNumber should not throw if the value is an number or null or undefined`, () => {
    assertNumberOptionalNullable(null);
    assertNumberOptionalNullable(undefined);
    assertNumberOptionalNullable(1);
    assertNumberOptionalNullable(0);
  });
});
