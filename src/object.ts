import typeError from './typeError'

/**
 * Throws if `value` isn't a object.
 */
export function assertObject(value: unknown, message?: string): asserts value is Record<any, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw typeError('object', value, message);
  }
}

/**
 * Throws if `value` isn't a object or undefined.
 */
export function assertObjectOptional(value: unknown, message?: string): asserts value is Record<any, unknown> | undefined {
  if(value === undefined) {
    return;
  }
  assertObject(value, message);
}

/**
 * Throws if `value` isn't a object or null.
 */
export function assertObjectNullable(value: unknown, message?: string): asserts value is Record<any, unknown> | null {
  if(value === null) {
    return;
  }
  assertObject(value, message);
}

/**
 * Throws if `value` isn't a object or null or undefined.
 */
export function assertObjectOptionalNullable(value: unknown, message?: string): asserts value is (Record<any, unknown> | null | undefined) {
  if(value === null || value === undefined) {
    return;
  }
  assertObject(value, message);
}

/**
 * Throws if `value` isn't a object.
 */
export function getObject(value: unknown, message?: string): Record<any, unknown> {
  assertObject(value, message);
  return value;
}

/**
 * Throws if `value` isn't a object or undefined.
 */
export function getObjectOptional(
  value: unknown,
  message?: string
): Record<any, unknown> | undefined {
  assertObjectOptional(value, message);
  return value;
}

/**
 * Throws if `value` isn't a object or null.
 */
export function getObjectNullable(
  value: unknown,
  message?: string
): Record<any, unknown> | null {
  assertObjectNullable(value, message);
  return value;
}

/**
 * Throws if `value` isn't a object or null.
 */
export function getObjectOptionalNullable(
  value: unknown,
  message?: string
): Record<any, unknown> | undefined | null {
  assertObjectOptionalNullable(value, message);
  return value;
}
