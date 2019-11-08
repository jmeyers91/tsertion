"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function typeError(expectedType, value, message) {
    const error = new Error(`Expected ${message ||
        'value'} to be of type ${expectedType}. Got ${value}.`);
    error.statusCode = 400;
    return error;
}
exports.default = typeError;
//# sourceMappingURL=typeError.js.map