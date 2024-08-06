"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRtGuards = void 0;
const passport_1 = require("@nestjs/passport");
class ClientRtGuards extends passport_1.AuthGuard('client-jwt-refresh') {
    constructor() {
        super();
    }
}
exports.ClientRtGuards = ClientRtGuards;
//# sourceMappingURL=client-rt.guard.js.map