import typeError from './typeError'

/**
 * Throws if `value` isn't a array.
 */
export function assertArray(value: unknown, message?: string): asserts value is unknown[] {
  if (!Array.isArray(value)) {
    throw typeError('array', value, message);
  }
}

/**
 * Throws if `value` isn't a array or undefined.
 */
export function assertArrayOptional(value: unknown, message?: string): asserts value is unknown[] | undefined {
  if(value === undefined) {
    return;
  }
  assertArray(value, message);
}

/**
 * Throws if `value` isn't a array or null.
 */
export function assertArrayNullable(value: unknown, message?: string): asserts value is unknown[] | null {
  if(value === null) {
    return;
  }
  assertArray(value, message);
}

/**
 * Throws if `value` isn't a array or null or undefined.
 */
export function assertArrayOptionalNullable(value: unknown, message?: string): asserts value is (unknown[] | null | undefined) {
  if(value === null || value === undefined) {
    return;
  }
  assertArray(value, message);
}

/**
 * Throws if `value` isn't a array.
 */
export function getArray(value: unknown, message?: string): unknown[] {
  assertArray(value, message);
  return value;
}

/**
 * Throws if `value` isn't a array or undefined.
 */
export function getArrayOptional(
  value: unknown,
  message?: string
): unknown[] | undefined {
  assertArrayOptional(value, message);
  return value;
}

/**
 * Throws if `value` isn't a array or null.
 */
export function getArrayNullable(
  value: unknown,
  message?: string
): unknown[] | null {
  assertArrayNullable(value, message);
  return value;
}

/**
 * Throws if `value` isn't a array or null.
 */
export function getArrayOptionalNullable(
  value: unknown,
  message?: string
): unknown[] | undefined | null {
  assertArrayOptionalNullable(value, message);
  return value;
}
