"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const user_schema_1 = require("../schemas/user.schema");
let UserRepository = class UserRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }
};
UserRepository = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_2.InjectModel(user_schema_1.User.name)),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map