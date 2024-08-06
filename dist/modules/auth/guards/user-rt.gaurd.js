"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRtGuards = void 0;
const passport_1 = require("@nestjs/passport");
class UserRtGuards extends passport_1.AuthGuard('user-jwt-refresh') {
    constructor() {
        console.log('in');
        super();
    }
}
exports.UserRtGuards = UserRtGuards;
//# sourceMappingURL=user-rt.gaurd.js.map