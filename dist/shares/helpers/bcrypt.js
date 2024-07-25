"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateHash = exports.generateHash = void 0;
const bcrypt_1 = require("bcrypt");
const generateHash = async (password) => {
    const salt = await bcrypt_1.genSalt(10);
    const hashPassword = await bcrypt_1.hash(password, salt);
    return {
        salt,
        hashPassword,
    };
};
exports.generateHash = generateHash;
const validateHash = (password, hash) => {
    if (!password || !hash) {
        return Promise.resolve(false);
    }
    return bcrypt_1.compare(password, hash);
};
exports.validateHash = validateHash;
//# sourceMappingURL=bcrypt.js.map