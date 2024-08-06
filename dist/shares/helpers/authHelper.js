"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = exports.serializeMessage = void 0;
const jwt_decode_1 = require("jwt-decode");
const lodash = require('lodash');
const serializeMessage = (message) => {
    return JSON.stringify(lodash.cloneDeepWith(message, (value) => {
        return !lodash.isPlainObject(value) ? lodash.toString(value) : undefined;
    }));
};
exports.serializeMessage = serializeMessage;
const decodeToken = (ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const token = request.headers.authorization;
    return jwt_decode_1.default(token);
};
exports.decodeToken = decodeToken;
//# sourceMappingURL=authHelper.js.map