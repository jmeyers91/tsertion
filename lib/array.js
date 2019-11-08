"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeError_1 = __importDefault(require("./typeError"));
/**
 * Throws if `value` isn't a array.
 */
function assertArray(value, message) {
    if (!Array.isArray(value)) {
        throw typeError_1.default('array', value, message);
    }
}
exports.assertArray = assertArray;
/**
 * Throws if `value` isn't a array or undefined.
 */
function assertArrayOptional(value, message) {
    if (value === undefined) {
        return;
    }
    assertArray(value, message);
}
exports.assertArrayOptional = assertArrayOptional;
/**
 * Throws if `value` isn't a array or null.
 */
function assertArrayNullable(value, message) {
    if (value === null) {
        return;
    }
    assertArray(value, message);
}
exports.assertArrayNullable = assertArrayNullable;
/**
 * Throws if `value` isn't a array or null or undefined.
 */
function assertArrayOptionalNullable(value, message) {
    if (value === null || value === undefined) {
        return;
    }
    assertArray(value, message);
}
exports.assertArrayOptionalNullable = assertArrayOptionalNullable;
/**
 * Throws if `value` isn't a array.
 */
function getArray(value, message) {
    assertArray(value, message);
    return value;
}
exports.getArray = getArray;
/**
 * Throws if `value` isn't a array or undefined.
 */
function getArrayOptional(value, message) {
    assertArrayOptional(value, message);
    return value;
}
exports.getArrayOptional = getArrayOptional;
/**
 * Throws if `value` isn't a array or null.
 */
function getArrayNullable(value, message) {
    assertArrayNullable(value, message);
    return value;
}
exports.getArrayNullable = getArrayNullable;
/**
 * Throws if `value` isn't a array or null.
 */
function getArrayOptionalNullable(value, message) {
    assertArrayOptionalNullable(value, message);
    return value;
}
exports.getArrayOptionalNullable = getArrayOptionalNullable;
//# sourceMappingURL=array.js.map