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
    UserRole[UserRole["quan_ly_don_hang"] = 1] = "quan_ly_don_hang";
    UserRole[UserRole["tu_van_vien"] = 2] = "tu_van_vien";
    UserRole[UserRole["chuyen_hang"] = 3] = "chuyen_hang";
    UserRole[UserRole["cong_tac_vien"] = 5] = "cong_tac_vien";
    UserRole[UserRole["ho_tro"] = 6] = "ho_tro";
    UserRole[UserRole["ky_thuat_vien"] = 7] = "ky_thuat_vien";
    UserRole[UserRole["nhan_vien_hikari"] = 8] = "nhan_vien_hikari";
    UserRole[UserRole["thanh_toan_vien"] = 9] = "thanh_toan_vien";
    UserRole[UserRole["quang_ly_dich_vu"] = 10] = "quang_ly_dich_vu";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
//# sourceMappingURL=user.enum.js.map