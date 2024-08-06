"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("./user.service");
const get_users_dto_1 = require("./dto/get-users.dto");
const create_user_dto_1 = require("./dto/create-user.dto");
const pagination_dto_1 = require("../../shares/dtos/pagination.dto");
const http_decorators_1 = require("../../shares/decorators/http.decorators");
let UserController = class UserController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async findAll(query) {
        return this.usersService.findAll(query);
    }
    async createUser(createUserDto) {
        await this.usersService.createUser(createUserDto);
    }
};
tslib_1.__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ summary: 'Get all user' }),
    tslib_1.__param(0, common_1.Query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [get_users_dto_1.GetUsersDto]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ summary: 'Create user' }),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
UserController = tslib_1.__decorate([
    swagger_1.ApiTags('User'),
    common_1.Controller('user'),
    tslib_1.__metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map