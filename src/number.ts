import typeError from './typeError'

/**
 * Throws if `value` isn't a number.
 */
export function assertNumber(value: unknown, message?: string): asserts value is number {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw typeError('number', value, message);
  }
}

/**
 * Throws if `value` isn't a number or undefined.
 */
export function assertNumberOptional(value: unknown, message?: string): asserts value is number | undefined {
  if(value === undefined) {
    return;
  }
  assertNumber(value, message);
}

/**
 * Throws if `value` isn't a number or null.
 */
export function assertNumberNullable(value: unknown, message?: string): asserts value is number | null {
  if(value === null) {
    return;
  }
  assertNumber(value, message);
}

/**
 * Throws if `value` isn't a number or null or undefined.
 */
export function assertNumberOptionalNullable(value: unknown, message?: string): asserts value is (number | null | undefined) {
  if(value === null || value === undefined) {
    return;
  }
  assertNumber(value, message);
}

/**
 * Throws if `value` isn't a number.
 */
export function getNumber(value: unknown, message?: string): number {
  assertNumber(value, message);
  return value;
}

/**
 * Throws if `value` isn't a number or undefined.
 */
export function getNumberOptional(
  value: unknown,
  message?: string
): number | undefined {
  assertNumberOptional(value, message);
  return value;
}

/**
 * Throws if `value` isn't a number or null.
 */
export function getNumberNullable(
  value: unknown,
  message?: string
): number | null {
  assertNumberNullable(value, message);
  return value;
}

/**
 * Throws if `value` isn't a number or null.
 */
export function getNumberOptionalNullable(
  value: unknown,
  message?: string
): number | undefined | null {
  assertNumberOptionalNullable(value, message);
  return value;
}

