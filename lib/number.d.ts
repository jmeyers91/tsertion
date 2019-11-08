/**
 * Throws if `value` isn't a number.
 */
export declare function assertNumber(value: unknown, message?: string): asserts value is number;
/**
 * Throws if `value` isn't a number or undefined.
 */
export declare function assertNumberOptional(value: unknown, message?: string): asserts value is number | undefined;
/**
 * Throws if `value` isn't a number or null.
 */
export declare function assertNumberNullable(value: unknown, message?: string): asserts value is number | null;
/**
 * Throws if `value` isn't a number or null or undefined.
 */
export declare function assertNumberOptionalNullable(value: unknown, message?: string): asserts value is (number | null | undefined);
/**
 * Throws if `value` isn't a number.
 */
export declare function getNumber(value: unknown, message?: string): number;
/**
 * Throws if `value` isn't a number or undefined.
 */
export declare function getNumberOptional(value: unknown, message?: string): number | undefined;
/**
 * Throws if `value` isn't a number or null.
 */
export declare function getNumberNullable(value: unknown, message?: string): number | null;
/**
 * Throws if `value` isn't a number or null.
 */
export declare function getNumberOptionalNullable(value: unknown, message?: string): number | undefined | null;
//# sourceMappingURL=number.d.ts.map