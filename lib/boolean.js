"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeError_1 = __importDefault(require("./typeError"));
/**
 * Throws if `value` isn't a boolean.
 */
function assertBoolean(value, message) {
    if (typeof value !== 'boolean') {
        throw typeError_1.default('boolean', value, message);
    }
}
exports.assertBoolean = assertBoolean;
/**
 * Throws if `value` isn't a boolean or undefined.
 */
function assertBooleanOptional(value, message) {
    if (value === undefined) {
        return;
    }
    assertBoolean(value, message);
}
exports.assertBooleanOptional = assertBooleanOptional;
/**
 * Throws if `value` isn't a boolean or null.
 */
function assertBooleanNullable(value, message) {
    if (value === null) {
        return;
    }
    assertBoolean(value, message);
}
exports.assertBooleanNullable = assertBooleanNullable;
/**
 * Throws if `value` isn't a boolean or null or undefined.
 */
function assertBooleanOptionalNullable(value, message) {
    if (value === null || value === undefined) {
        return;
    }
    assertBoolean(value, message);
}
exports.assertBooleanOptionalNullable = assertBooleanOptionalNullable;
/**
 * Throws if `value` isn't a boolean.
 */
function getBoolean(value, message) {
    assertBoolean(value, message);
    return value;
}
exports.getBoolean = getBoolean;
/**
 * Throws if `value` isn't a boolean or undefined.
 */
function getBooleanOptional(value, message) {
    assertBooleanOptional(value, message);
    return value;
}
exports.getBooleanOptional = getBooleanOptional;
/**
 * Throws if `value` isn't a boolean or null.
 */
function getBooleanNullable(value, message) {
    assertBooleanNullable(value, message);
    return value;
}
exports.getBooleanNullable = getBooleanNullable;
/**
 * Throws if `value` isn't a boolean or null.
 */
function getBooleanOptionalNullable(value, message) {
    assertBooleanOptionalNullable(value, message);
    return value;
}
exports.getBooleanOptionalNullable = getBooleanOptionalNullable;
//# sourceMappingURL=boolean.js.map