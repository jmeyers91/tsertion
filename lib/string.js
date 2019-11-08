"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeError_1 = __importDefault(require("./typeError"));
/**
 * Throws if `value` isn't a string.
 */
function assertString(value, message) {
    if (typeof value !== 'string') {
        throw typeError_1.default('string', value, message);
    }
}
exports.assertString = assertString;
/**
 * Throws if `value` isn't a string or undefined.
 */
function assertStringOptional(value, message) {
    if (value === undefined) {
        return;
    }
    assertString(value, message);
}
exports.assertStringOptional = assertStringOptional;
/**
 * Throws if `value` isn't a string or null.
 */
function assertStringNullable(value, message) {
    if (value === null) {
        return;
    }
    assertString(value, message);
}
exports.assertStringNullable = assertStringNullable;
/**
 * Throws if `value` isn't a string or null or undefined.
 */
function assertStringOptionalNullable(value, message) {
    if (value === null || value === undefined) {
        return;
    }
    assertString(value, message);
}
exports.assertStringOptionalNullable = assertStringOptionalNullable;
/**
 * Throws if `value` isn't a string.
 */
function getString(value, message) {
    assertString(value, message);
    return value;
}
exports.getString = getString;
/**
 * Throws if `value` isn't a string or undefined.
 */
function getStringOptional(value, message) {
    assertStringOptional(value, message);
    return value;
}
exports.getStringOptional = getStringOptional;
/**
 * Throws if `value` isn't a string or null.
 */
function getStringNullable(value, message) {
    assertStringNullable(value, message);
    return value;
}
exports.getStringNullable = getStringNullable;
/**
 * Throws if `value` isn't a string or null.
 */
function getStringOptionalNullable(value, message) {
    assertStringOptionalNullable(value, message);
    return value;
}
exports.getStringOptionalNullable = getStringOptionalNullable;
//# sourceMappingURL=string.js.map