/**
 * Throws if `value` isn't a string.
 */
export declare function assertString(value: unknown, message?: string): asserts value is string;
/**
 * Throws if `value` isn't a string or undefined.
 */
export declare function assertStringOptional(value: unknown, message?: string): asserts value is string | undefined;
/**
 * Throws if `value` isn't a string or null.
 */
export declare function assertStringNullable(value: unknown, message?: string): asserts value is string | null;
/**
 * Throws if `value` isn't a string or null or undefined.
 */
export declare function assertStringOptionalNullable(value: unknown, message?: string): asserts value is (string | null | undefined);
/**
 * Throws if `value` isn't a string.
 */
export declare function getString(value: unknown, message?: string): string;
/**
 * Throws if `value` isn't a string or undefined.
 */
export declare function getStringOptional(value: unknown, message?: string): string | undefined;
/**
 * Throws if `value` isn't a string or null.
 */
export declare function getStringNullable(value: unknown, message?: string): string | null;
/**
 * Throws if `value` isn't a string or null.
 */
export declare function getStringOptionalNullable(value: unknown, message?: string): string | undefined | null;
//# sourceMappingURL=string.d.ts.map