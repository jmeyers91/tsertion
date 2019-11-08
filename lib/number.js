"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeError_1 = __importDefault(require("./typeError"));
/**
 * Throws if `value` isn't a number.
 */
function assertNumber(value, message) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
        throw typeError_1.default('number', value, message);
    }
}
exports.assertNumber = assertNumber;
/**
 * Throws if `value` isn't a number or undefined.
 */
function assertNumberOptional(value, message) {
    if (value === undefined) {
        return;
    }
    assertNumber(value, message);
}
exports.assertNumberOptional = assertNumberOptional;
/**
 * Throws if `value` isn't a number or null.
 */
function assertNumberNullable(value, message) {
    if (value === null) {
        return;
    }
    assertNumber(value, message);
}
exports.assertNumberNullable = assertNumberNullable;
/**
 * Throws if `value` isn't a number or null or undefined.
 */
function assertNumberOptionalNullable(value, message) {
    if (value === null || value === undefined) {
        return;
    }
    assertNumber(value, message);
}
exports.assertNumberOptionalNullable = assertNumberOptionalNullable;
/**
 * Throws if `value` isn't a number.
 */
function getNumber(value, message) {
    assertNumber(value, message);
    return value;
}
exports.getNumber = getNumber;
/**
 * Throws if `value` isn't a number or undefined.
 */
function getNumberOptional(value, message) {
    assertNumberOptional(value, message);
    return value;
}
exports.getNumberOptional = getNumberOptional;
/**
 * Throws if `value` isn't a number or null.
 */
function getNumberNullable(value, message) {
    assertNumberNullable(value, message);
    return value;
}
exports.getNumberNullable = getNumberNullable;
/**
 * Throws if `value` isn't a number or null.
 */
function getNumberOptionalNullable(value, message) {
    assertNumberOptionalNullable(value, message);
    return value;
}
exports.getNumberOptionalNullable = getNumberOptionalNullable;
//# sourceMappingURL=number.js.map