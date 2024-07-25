"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCurrentUser = void 0;
const common_1 = require("@nestjs/common");
exports.GetCurrentUser = common_1.createParamDecorator((data, context) => {
    const request = context.switchToHttp().getRequest();
    if (!data)
        return request.user;
    return data;
});
//# sourceMappingURL=get-current-user.decorators.js.map