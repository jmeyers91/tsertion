/**
 * Throws if `value` isn't a object.
 */
export declare function assertObject(value: unknown, message?: string): asserts value is Record<any, unknown>;
/**
 * Throws if `value` isn't a object or undefined.
 */
export declare function assertObjectOptional(value: unknown, message?: string): asserts value is Record<any, unknown> | undefined;
/**
 * Throws if `value` isn't a object or null.
 */
export declare function assertObjectNullable(value: unknown, message?: string): asserts value is Record<any, unknown> | null;
/**
 * Throws if `value` isn't a object or null or undefined.
 */
export declare function assertObjectOptionalNullable(value: unknown, message?: string): asserts value is (Record<any, unknown> | null | undefined);
/**
 * Throws if `value` isn't a object.
 */
export declare function getObject(value: unknown, message?: string): Record<any, unknown>;
/**
 * Throws if `value` isn't a object or undefined.
 */
export declare function getObjectOptional(value: unknown, message?: string): Record<any, unknown> | undefined;
/**
 * Throws if `value` isn't a object or null.
 */
export declare function getObjectNullable(value: unknown, message?: string): Record<any, unknown> | null;
/**
 * Throws if `value` isn't a object or null.
 */
export declare function getObjectOptionalNullable(value: unknown, message?: string): Record<any, unknown> | undefined | null;
//# sourceMappingURL=object.d.ts.map