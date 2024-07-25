"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FORGOT_PASSWORD_CACHE = exports.SIGN_UP_CACHE = exports.CLIENT_AUTH_CACHE_PREFIX = exports.USER_AUTH_CACHE_PREFIX = exports.FORGOT_PASSWORD_EXPIRY = exports.SIGN_UP_EXPIRY = exports.JWT_CONSTANTS = void 0;
const config = require("config");
exports.JWT_CONSTANTS = {
    clientAccessTokenSecret: config.get('app.client_jwt_access_token_secret'),
    clientAccessTokenExpiry: parseInt(config.get('app.client_jwt_access_token_expiration_time')),
    clientRefreshTokenSecret: config.get('app.client_jwt_refresh_token_secret'),
    clientRefreshTokenExpiry: parseInt(config.get('app.client_jwt_refresh_token_expiration_time')),
    userAccessTokenSecret: config.get('app.user_jwt_access_token_secret'),
    userAccessTokenExpiry: parseInt(config.get('app.user_jwt_access_token_expiration_time')),
    userRefreshTokenSecret: config.get('app.user_jwt_refresh_token_secret'),
    userRefreshTokenExpiry: parseInt(config.get('app.user_jwt_refresh_token_expiration_time')),
};
exports.SIGN_UP_EXPIRY = parseInt(config.get('sign_up_expiration_time'));
exports.FORGOT_PASSWORD_EXPIRY = parseInt(config.get('forgot_password_expiration_time'));
exports.USER_AUTH_CACHE_PREFIX = 'USER_AUTH_CACHE_PREFIX_';
exports.CLIENT_AUTH_CACHE_PREFIX = 'CLIENT_AUTH_CACHE_PREFIX_';
exports.SIGN_UP_CACHE = 'SIGN_CACHE_';
exports.FORGOT_PASSWORD_CACHE = 'FORGOT_PASSWORD_CACHE_';
//# sourceMappingURL=auth.constants.js.map