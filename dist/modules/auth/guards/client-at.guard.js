"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientAtGuards = void 0;
const passport_1 = require("@nestjs/passport");
class ClientAtGuards extends passport_1.AuthGuard('client-jwt') {
    constructor() {
        super();
    }
}
exports.ClientAtGuards = ClientAtGuards;
//# sourceMappingURL=client-at.guard.js.map