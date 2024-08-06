"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const client_service_1 = require("./client.service");
const swagger_1 = require("@nestjs/swagger");
const sign_up_by_code_dto_1 = require("./dto/sign-up-by-code.dto");
const forgot_password_dto_1 = require("./dto/forgot-password.dto");
const change_password_by_code_dto_1 = require("./dto/change-password-by-code.dto");
const change_password_dto_1 = require("./dto/change-password.dto");
const get_clients_dto_1 = require("./dto/get-clients.dto");
const pagination_dto_1 = require("../../shares/dtos/pagination.dto");
const create_client_dto_1 = require("./dto/create-client.dto");
const http_decorators_1 = require("../../shares/decorators/http.decorators");
let ClientController = class ClientController {
    constructor(clientService) {
        this.clientService = clientService;
    }
    async searchClientInOrder(query) {
        return this.clientService.searchClientInOrder(query);
    }
    async signUp(createClientDto) {
        await this.clientService.signUp(createClientDto);
    }
    async activateAccount(accountId) {
        await this.clientService.activeAccout(accountId);
    }
    async signUpByCode(signUpByCodeDto) {
        return this.clientService.signUpByCode(signUpByCodeDto);
    }
    forgotPassword(forgotPasswordDto) {
        return this.clientService.forgotPassword(forgotPasswordDto);
    }
    changePasswordByCode(changePasswordByCodeDto) {
        return this.clientService.changePasswordByCode(changePasswordByCodeDto);
    }
    changePassword(changePasswordDto) {
        return this.clientService.changePassword(changePasswordDto);
    }
    async findAll(query) {
        return this.clientService.findAll(query);
    }
    async createUser(createUserDto) {
        const user = await this.clientService.createClient(createUserDto);
        return { message: 'User created successfully', user };
    }
};
tslib_1.__decorate([
    common_1.Get('search-client'),
    swagger_1.ApiBearerAuth(),
    http_decorators_1.UserAuth(),
    swagger_1.ApiOperation({ summary: `Search client in orders` }),
    tslib_1.__param(0, common_1.Query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [get_clients_dto_1.GetClientByPhoneOrderDto]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientController.prototype, "searchClientInOrder", null);
tslib_1.__decorate([
    common_1.Post('sign-up'),
    swagger_1.ApiOperation({ summary: 'Client Sign up with gmail' }),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [create_client_dto_1.CreateClientDto]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientController.prototype, "signUp", null);
tslib_1.__decorate([
    common_1.Get(':accountId'),
    tslib_1.__param(0, common_1.Param('accountId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientController.prototype, "activateAccount", null);
tslib_1.__decorate([
    common_1.Post('sign-up-by-code'),
    swagger_1.ApiOperation({ summary: 'Client Verification by code' }),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [sign_up_by_code_dto_1.SignUpByCodeDto]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientController.prototype, "signUpByCode", null);
tslib_1.__decorate([
    common_1.Post('forgot-password'),
    swagger_1.ApiOperation({ summary: 'Client get code change password by send email' }),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [forgot_password_dto_1.ForgotPasswordDto]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientController.prototype, "forgotPassword", null);
tslib_1.__decorate([
    common_1.Post('change-password-by-code'),
    swagger_1.ApiOperation({ summary: 'Client change password by code' }),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [change_password_by_code_dto_1.default]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientController.prototype, "changePasswordByCode", null);
tslib_1.__decorate([
    common_1.Post('change-password'),
    swagger_1.ApiOperation({ summary: 'Change client password' }),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [change_password_dto_1.default]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientController.prototype, "changePassword", null);
tslib_1.__decorate([
    common_1.Get(),
    swagger_1.ApiBearerAuth(),
    http_decorators_1.ClientAuth(),
    swagger_1.ApiOperation({ summary: 'Get all client' }),
    tslib_1.__param(0, common_1.Query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [get_clients_dto_1.GetClientsDto]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ summary: 'Create client test' }),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [create_client_dto_1.CreateClientDto]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientController.prototype, "createUser", null);
ClientController = tslib_1.__decorate([
    swagger_1.ApiTags('Client'),
    common_1.Controller('client'),
    tslib_1.__metadata("design:paramtypes", [client_service_1.ClientService])
], ClientController);
exports.ClientController = ClientController;
//# sourceMappingURL=client.controller.js.map