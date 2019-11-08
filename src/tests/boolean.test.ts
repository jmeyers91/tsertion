import {
  assertBoolean,
  assertBooleanNullable,
  assertBooleanOptional,
  assertBooleanOptionalNullable
} from '../boolean';

describe('tsertion boolean', () => {
  test(`assertBoolean should throw if the value isn't an boolean`, () => {
    expect(() => assertBoolean(1)).toThrow();
    expect(() => assertBoolean([])).toThrow();
    expect(() => assertBoolean({})).toThrow();
    expect(() => assertBoolean('foo')).toThrow();
    expect(() => assertBoolean(null)).toThrow();
    expect(() => assertBoolean(undefined)).toThrow();
    expect(() => assertBoolean(NaN)).toThrow();
  });

  test(`assertBoolean should not throw if the value is an boolean`, () => {
    assertBoolean(true);
    assertBoolean(false);
  });

  test(`assertBooleanNullable should throw if the value isn't an boolean or null`, () => {
    expect(() => assertBooleanNullable(1)).toThrow();
    expect(() => assertBooleanNullable([])).toThrow();
    expect(() => assertBooleanNullable({})).toThrow();
    expect(() => assertBooleanNullable('foo')).toThrow();
    expect(() => assertBooleanNullable(undefined)).toThrow();
    expect(() => assertBooleanNullable(NaN)).toThrow();
  });

  test(`assertBoolean should not throw if the value is an boolean or null`, () => {
    assertBooleanNullable(null);
    assertBooleanNullable(true);
    assertBooleanNullable(false);
  });

  test(`assertBooleanOptional should throw if the value isn't an boolean or null`, () => {
    expect(() => assertBooleanOptional(1)).toThrow();
    expect(() => assertBooleanOptional([])).toThrow();
    expect(() => assertBooleanOptional({})).toThrow();
    expect(() => assertBooleanOptional('foo')).toThrow();
    expect(() => assertBooleanOptional(null)).toThrow();
    expect(() => assertBooleanOptional(NaN)).toThrow();
  });

  test(`assertBoolean should not throw if the value is an boolean or null`, () => {
    assertBooleanOptional(undefined);
    assertBooleanOptional(true);
    assertBooleanOptional(false);
  });

  test(`assertBooleanOptionalNullable should throw if the value isn't an boolean or null or undefined`, () => {
    expect(() => assertBooleanOptionalNullable(1)).toThrow();
    expect(() => assertBooleanOptionalNullable([])).toThrow();
    expect(() => assertBooleanOptionalNullable('foo')).toThrow();
    expect(() => assertBooleanOptionalNullable({})).toThrow();
    expect(() => assertBooleanOptionalNullable(NaN)).toThrow();
  });

  test(`assertBoolean should not throw if the value is an boolean or null or undefined`, () => {
    assertBooleanOptionalNullable(null);
    assertBooleanOptionalNullable(undefined);
    assertBooleanOptionalNullable(true);
    assertBooleanOptionalNullable(false);
  });
});
