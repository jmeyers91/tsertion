import typeError from './typeError'

/**
 * Throws if `value` isn't a string.
 */
export function assertString(value: unknown, message?: string): asserts value is string {
  if (typeof value !== 'string') {
    throw typeError('string', value, message);
  }
}

/**
 * Throws if `value` isn't a string or undefined.
 */
export function assertStringOptional(value: unknown, message?: string): asserts value is string | undefined {
  if(value === undefined) {
    return;
  }
  assertString(value, message);
}

/**
 * Throws if `value` isn't a string or null.
 */
export function assertStringNullable(value: unknown, message?: string): asserts value is string | null {
  if(value === null) {
    return;
  }
  assertString(value, message);
}

/**
 * Throws if `value` isn't a string or null or undefined.
 */
export function assertStringOptionalNullable(value: unknown, message?: string): asserts value is (string | null | undefined) {
  if(value === null || value === undefined) {
    return;
  }
  assertString(value, message);
}

/**
 * Throws if `value` isn't a string.
 */
export function getString(value: unknown, message?: string): string {
  assertString(value, message);
  return value;
}

/**
 * Throws if `value` isn't a string or undefined.
 */
export function getStringOptional(
  value: unknown,
  message?: string
): string | undefined {
  assertStringOptional(value, message);
  return value;
}

/**
 * Throws if `value` isn't a string or null.
 */
export function getStringNullable(
  value: unknown,
  message?: string
): string | null {
  assertStringNullable(value, message);
  return value;
}

/**
 * Throws if `value` isn't a string or null.
 */
export function getStringOptionalNullable(
  value: unknown,
  message?: string
): string | undefined | null {
  assertStringOptionalNullable(value, message);
  return value;
}

