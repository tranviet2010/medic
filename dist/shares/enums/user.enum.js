"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = exports.UserStatus = void 0;
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "ACTIVE";
    UserStatus["INACTIVE"] = "INACTIVE";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
var UserRole;
(function (UserRole) {
    UserRole[UserRole["admin"] = 0] = "admin";
    UserRole[UserRole["doi_tac"] = 1] = "doi_tac";
    UserRole[UserRole["dai_ly"] = 2] = "dai_ly";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
//# sourceMappingURL=user.enum.js.map