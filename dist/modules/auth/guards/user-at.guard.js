"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAtGuards = void 0;
const passport_1 = require("@nestjs/passport");
class UserAtGuards extends passport_1.AuthGuard('user-jwt') {
    constructor() {
        super();
    }
}
exports.UserAtGuards = UserAtGuards;
//# sourceMappingURL=user-at.guard.js.map