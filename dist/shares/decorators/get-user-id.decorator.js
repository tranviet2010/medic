"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserID = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("../exceptions");
exports.UserID = common_1.createParamDecorator((data, ctx) => {
    var _a, _b;
    try {
        return (_b = (_a = ctx.switchToHttp().getRequest()) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b._id.toString();
    }
    catch (e) {
        throw new common_1.HttpException(exceptions_1.httpErrors.UNAUTHORIZED, common_1.HttpStatus.BAD_REQUEST);
    }
});
//# sourceMappingURL=get-user-id.decorator.js.map