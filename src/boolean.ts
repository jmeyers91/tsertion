import typeError from './typeError'

/**
 * Throws if `value` isn't a boolean.
 */
export function assertBoolean(value: unknown, message?: string): asserts value is boolean {
  if (typeof value !== 'boolean') {
    throw typeError('boolean', value, message);
  }
}

/**
 * Throws if `value` isn't a boolean or undefined.
 */
export function assertBooleanOptional(value: unknown, message?: string): asserts value is boolean | undefined {
  if(value === undefined) {
    return;
  }
  assertBoolean(value, message);
}

/**
 * Throws if `value` isn't a boolean or null.
 */
export function assertBooleanNullable(value: unknown, message?: string): asserts value is boolean | null {
  if(value === null) {
    return;
  }
  assertBoolean(value, message);
}

/**
 * Throws if `value` isn't a boolean or null or undefined.
 */
export function assertBooleanOptionalNullable(value: unknown, message?: string): asserts value is (boolean | null | undefined) {
  if(value === null || value === undefined) {
    return;
  }
  assertBoolean(value, message);
}

/**
 * Throws if `value` isn't a boolean.
 */
export function getBoolean(value: unknown, message?: string): boolean {
  assertBoolean(value, message);
  return value;
}

/**
 * Throws if `value` isn't a boolean or undefined.
 */
export function getBooleanOptional(
  value: unknown,
  message?: string
): boolean | undefined {
  assertBooleanOptional(value, message);
  return value;
}

/**
 * Throws if `value` isn't a boolean or null.
 */
export function getBooleanNullable(
  value: unknown,
  message?: string
): boolean | null {
  assertBooleanNullable(value, message);
  return value;
}

/**
 * Throws if `value` isn't a boolean or null.
 */
export function getBooleanOptionalNullable(
  value: unknown,
  message?: string
): boolean | undefined | null {
  assertBooleanOptionalNullable(value, message);
  return value;
}

