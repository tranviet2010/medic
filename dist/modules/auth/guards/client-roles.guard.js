"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRolesGuard = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const client_enum_1 = require("../../../shares/enums/client.enum");
const utils_1 = require("../../../shares/helpers/utils");
let ClientRolesGuard = class ClientRolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride('roles', [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!(requiredRoles === null || requiredRoles === void 0 ? void 0 : requiredRoles.length)) {
            return true;
        }
        const { user } = context.switchToHttp().getRequest();
        return utils_1.checkElementsExist(user.role, requiredRoles);
    }
};
ClientRolesGuard = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [core_1.Reflector])
], ClientRolesGuard);
exports.ClientRolesGuard = ClientRolesGuard;
//# sourceMappingURL=client-roles.guard.js.map