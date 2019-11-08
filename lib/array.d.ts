/**
 * Throws if `value` isn't a array.
 */
export declare function assertArray(value: unknown, message?: string): asserts value is unknown[];
/**
 * Throws if `value` isn't a array or undefined.
 */
export declare function assertArrayOptional(value: unknown, message?: string): asserts value is unknown[] | undefined;
/**
 * Throws if `value` isn't a array or null.
 */
export declare function assertArrayNullable(value: unknown, message?: string): asserts value is unknown[] | null;
/**
 * Throws if `value` isn't a array or null or undefined.
 */
export declare function assertArrayOptionalNullable(value: unknown, message?: string): asserts value is (unknown[] | null | undefined);
/**
 * Throws if `value` isn't a array.
 */
export declare function getArray(value: unknown, message?: string): unknown[];
/**
 * Throws if `value` isn't a array or undefined.
 */
export declare function getArrayOptional(value: unknown, message?: string): unknown[] | undefined;
/**
 * Throws if `value` isn't a array or null.
 */
export declare function getArrayNullable(value: unknown, message?: string): unknown[] | null;
/**
 * Throws if `value` isn't a array or null.
 */
export declare function getArrayOptionalNullable(value: unknown, message?: string): unknown[] | undefined | null;
//# sourceMappingURL=array.d.ts.map