import {
  assertArray,
  assertArrayNullable,
  assertArrayOptional,
  assertArrayOptionalNullable
} from '../array';

describe('tsertion array', () => {
  test(`assertArray should throw if the value isn't an array`, () => {
    expect(() => assertArray(1)).toThrow();
    expect(() => assertArray(true)).toThrow();
    expect(() => assertArray({})).toThrow();
    expect(() => assertArray(null)).toThrow();
    expect(() => assertArray(undefined)).toThrow();
    expect(() => assertArray(NaN)).toThrow();
  });

  test(`assertArray should not throw if the value is an array`, () => {
    assertArray([]);
  });

  test(`assertArrayNullable should throw if the value isn't an array or null`, () => {
    expect(() => assertArrayNullable(1)).toThrow();
    expect(() => assertArrayNullable(true)).toThrow();
    expect(() => assertArrayNullable({})).toThrow();
    expect(() => assertArrayNullable(undefined)).toThrow();
    expect(() => assertArrayNullable(NaN)).toThrow();
  });

  test(`assertArray should not throw if the value is an array or null`, () => {
    assertArrayNullable([]);
    assertArrayNullable(null);
  });

  test(`assertArrayOptional should throw if the value isn't an array or null`, () => {
    expect(() => assertArrayOptional(1)).toThrow();
    expect(() => assertArrayOptional(true)).toThrow();
    expect(() => assertArrayOptional({})).toThrow();
    expect(() => assertArrayOptional(null)).toThrow();
    expect(() => assertArrayOptional(NaN)).toThrow();
  });

  test(`assertArray should not throw if the value is an array or null`, () => {
    assertArrayOptional([]);
    assertArrayOptional(undefined);
  });

  test(`assertArrayOptionalNullable should throw if the value isn't an array or null or undefined`, () => {
    expect(() => assertArrayOptionalNullable(1)).toThrow();
    expect(() => assertArrayOptionalNullable(true)).toThrow();
    expect(() => assertArrayOptionalNullable({})).toThrow();
    expect(() => assertArrayOptionalNullable(NaN)).toThrow();
  });

  test(`assertArray should not throw if the value is an array or null or undefined`, () => {
    assertArrayOptionalNullable([]);
    assertArrayOptionalNullable(null);
    assertArrayOptionalNullable(undefined);
  });
});
