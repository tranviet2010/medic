"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuth = exports.ClientAuth = exports.Roles = void 0;
const common_1 = require("@nestjs/common");
const client_at_guard_1 = require("../../modules/auth/guards/client-at.guard");
const client_roles_guard_1 = require("../../modules/auth/guards/client-roles.guard");
const user_at_guard_1 = require("../../modules/auth/guards/user-at.guard");
const user_roles_guard_1 = require("../../modules/auth/guards/user-roles.guard");
const Roles = (roles) => {
    const setMetaData = common_1.SetMetadata('roles', roles);
    return setMetaData;
};
exports.Roles = Roles;
const ClientAuth = (clientRole) => {
    return common_1.applyDecorators(common_1.UseGuards(client_at_guard_1.ClientAtGuards, client_roles_guard_1.ClientRolesGuard), exports.Roles(clientRole));
};
exports.ClientAuth = ClientAuth;
const UserAuth = (userRole) => {
    return common_1.applyDecorators(common_1.UseGuards(user_at_guard_1.UserAtGuards, user_roles_guard_1.UserRolesGuard), exports.Roles(userRole));
};
exports.UserAuth = UserAuth;
//# sourceMappingURL=http.decorators.js.map