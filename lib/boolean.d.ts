/**
 * Throws if `value` isn't a boolean.
 */
export declare function assertBoolean(value: unknown, message?: string): asserts value is boolean;
/**
 * Throws if `value` isn't a boolean or undefined.
 */
export declare function assertBooleanOptional(value: unknown, message?: string): asserts value is boolean | undefined;
/**
 * Throws if `value` isn't a boolean or null.
 */
export declare function assertBooleanNullable(value: unknown, message?: string): asserts value is boolean | null;
/**
 * Throws if `value` isn't a boolean or null or undefined.
 */
export declare function assertBooleanOptionalNullable(value: unknown, message?: string): asserts value is (boolean | null | undefined);
/**
 * Throws if `value` isn't a boolean.
 */
export declare function getBoolean(value: unknown, message?: string): boolean;
/**
 * Throws if `value` isn't a boolean or undefined.
 */
export declare function getBooleanOptional(value: unknown, message?: string): boolean | undefined;
/**
 * Throws if `value` isn't a boolean or null.
 */
export declare function getBooleanNullable(value: unknown, message?: string): boolean | null;
/**
 * Throws if `value` isn't a boolean or null.
 */
export declare function getBooleanOptionalNullable(value: unknown, message?: string): boolean | undefined | null;
//# sourceMappingURL=boolean.d.ts.map