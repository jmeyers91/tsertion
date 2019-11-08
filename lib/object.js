"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeError_1 = __importDefault(require("./typeError"));
/**
 * Throws if `value` isn't a object.
 */
function assertObject(value, message) {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
        throw typeError_1.default('object', value, message);
    }
}
exports.assertObject = assertObject;
/**
 * Throws if `value` isn't a object or undefined.
 */
function assertObjectOptional(value, message) {
    if (value === undefined) {
        return;
    }
    assertObject(value, message);
}
exports.assertObjectOptional = assertObjectOptional;
/**
 * Throws if `value` isn't a object or null.
 */
function assertObjectNullable(value, message) {
    if (value === null) {
        return;
    }
    assertObject(value, message);
}
exports.assertObjectNullable = assertObjectNullable;
/**
 * Throws if `value` isn't a object or null or undefined.
 */
function assertObjectOptionalNullable(value, message) {
    if (value === null || value === undefined) {
        return;
    }
    assertObject(value, message);
}
exports.assertObjectOptionalNullable = assertObjectOptionalNullable;
/**
 * Throws if `value` isn't a object.
 */
function getObject(value, message) {
    assertObject(value, message);
    return value;
}
exports.getObject = getObject;
/**
 * Throws if `value` isn't a object or undefined.
 */
function getObjectOptional(value, message) {
    assertObjectOptional(value, message);
    return value;
}
exports.getObjectOptional = getObjectOptional;
/**
 * Throws if `value` isn't a object or null.
 */
function getObjectNullable(value, message) {
    assertObjectNullable(value, message);
    return value;
}
exports.getObjectNullable = getObjectNullable;
/**
 * Throws if `value` isn't a object or null.
 */
function getObjectOptionalNullable(value, message) {
    assertObjectOptionalNullable(value, message);
    return value;
}
exports.getObjectOptionalNullable = getObjectOptionalNullable;
//# sourceMappingURL=object.js.map