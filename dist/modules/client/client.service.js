"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const client_schema_1 = require("./schemas/client.schema");
const mongoose_2 = require("mongoose");
const mail_service_1 = require("../mail/mail.service");
const utils_1 = require("../../shares/helpers/utils");
const auth_constants_1 = require("../auth/auth.constants");
const exceptions_1 = require("../../shares/exceptions");
const client_enum_1 = require("../../shares/enums/client.enum");
const bcrypt_1 = require("../../shares/helpers/bcrypt");
const pagination_dto_1 = require("../../shares/dtos/pagination.dto");
let ClientService = class ClientService {
    constructor(clientModel, mailService, cacheManager) {
        this.clientModel = clientModel;
        this.mailService = mailService;
        this.cacheManager = cacheManager;
    }
    async findOne(condition, selectPassword = false) {
        if (selectPassword) {
            return this.clientModel.findOne(condition).select('+password');
        }
        return this.clientModel.findOne(condition);
    }
    async findById(_id) {
        return this.clientModel.findById(_id).select('-password');
    }
    async signUp(createClientDto) {
        const { email, password, name, birthday, gender } = createClientDto;
        const user = await this.findOne({ email: email });
        if (user) {
            throw new common_1.BadRequestException('The email already exist!');
        }
        const code = utils_1.randomCodeNumber(6);
        const { hashPassword } = await bcrypt_1.generateHash(password);
        await this.mailService.sendSignUpEmail({ email, code, name, password: hashPassword, birthday, gender });
        await this.createClient(createClientDto);
    }
    async activeAccout(signUpDto) {
        const { email, password, name, birthday, gender } = signUpDto;
        const user = await this.findOne({ email: email });
        if (user) {
            throw new common_1.BadRequestException('The email already exist!');
        }
        const code = utils_1.randomCodeNumber(6);
        const { hashPassword } = await bcrypt_1.generateHash(password);
        await this.mailService.sendSignUpEmail({ email, code, name, password: hashPassword, birthday, gender });
    }
    async signUpEmail(signUpDto) {
        const { email, password, name, birthday, gender } = signUpDto;
        const user = await this.findOne({ email: email });
        if (user) {
            throw new common_1.BadRequestException('The email already exist!');
        }
        const code = utils_1.randomCodeNumber(6);
        const { hashPassword } = await bcrypt_1.generateHash(password);
        await this.mailService.sendSignUpEmail({ email, code, name, password: hashPassword, birthday, gender });
    }
    async signUpByCode(signUpByCodeDto) {
        const { code, email } = signUpByCodeDto;
        const verifyClientCache = await this.cacheManager.get(`${auth_constants_1.SIGN_UP_CACHE}${email}`);
        if (!verifyClientCache) {
            throw new common_1.BadRequestException(exceptions_1.httpErrors.CLIENT_EMAIL_VERIFY_FAIL);
        }
        const signUpInfo = JSON.parse(verifyClientCache);
        if (signUpInfo.attempt > 4) {
            throw new common_1.BadRequestException(exceptions_1.httpErrors.CLIENT_CODE_INVALID);
        }
        if (code != signUpInfo.code) {
            await this.cacheManager.set(`${auth_constants_1.SIGN_UP_CACHE}${email}`, JSON.stringify({ ...signUpInfo, attempt: signUpInfo.attempt + 1 }), {
                ttl: auth_constants_1.SIGN_UP_EXPIRY,
            });
            throw new common_1.BadRequestException(exceptions_1.httpErrors.CLIENT_EXPIRED_CODE);
        }
        if (signUpInfo.code !== code) {
            throw new common_1.BadRequestException(exceptions_1.httpErrors.CLIENT_EMAIL_VERIFY_FAIL);
        }
        const { name, password, gender, birthday } = signUpInfo;
        await this.createClientSignUpByCode({ email, name, password, gender, birthday });
    }
    async createClientSignUpByCode(createClientDto) {
        const { email, password, name, gender } = createClientDto;
        const client = await this.clientModel.findOne({ email });
        if (client) {
            throw new common_1.BadRequestException(exceptions_1.httpErrors.CLIENT_EXISTED);
        }
        return this.clientModel.create({
            ...createClientDto,
            password,
            status: client_enum_1.ClientStatus.ACTIVE,
            is_verify: true,
            name,
            gender,
        });
    }
    async createClient(createClientDto) {
        const { email, password } = createClientDto;
        const client = await this.clientModel.findOne({ email });
        if (client) {
            throw new common_1.BadRequestException(exceptions_1.httpErrors.CLIENT_EXISTED);
        }
        const { hashPassword } = await bcrypt_1.generateHash(password);
        return this.clientModel.create({ ...createClientDto, password: hashPassword, status: client_enum_1.ClientStatus.ACTIVE });
    }
    async forgotPassword(forgotPasswordDto) {
        const { email } = forgotPasswordDto;
        const client = await this.clientModel.findOne({ email });
        if (!client) {
            throw new common_1.BadRequestException(exceptions_1.httpErrors.CLIENT_EMAIL_CONFIRM_NOT_FOUND);
        }
        await this.mailService.sendForgotPasswordEmailJob(email);
    }
    async changePasswordByCode(changePasswordByCode) {
        const { verifyCode, password, email } = changePasswordByCode;
        const clientId = await this.checkVerificationCode(verifyCode, email);
        const { hashPassword } = await bcrypt_1.generateHash(password);
        await this.clientModel.updateOne({ _id: clientId }, { password: hashPassword });
    }
    async checkVerificationCode(verifyCode, email) {
        const client = await this.clientModel.findOne({ email });
        if (!client) {
            throw new common_1.BadRequestException(exceptions_1.httpErrors.CLIENT_EMAIL_CONFIRM_NOT_FOUND);
        }
        const verifyClientCache = await this.cacheManager.get(`${auth_constants_1.FORGOT_PASSWORD_CACHE}${email}`);
        if (!verifyClientCache) {
            throw new common_1.BadRequestException();
        }
        const forgotPasswordInfo = JSON.parse(verifyClientCache);
        if (forgotPasswordInfo.attempt > 4) {
            throw new common_1.BadRequestException(exceptions_1.httpErrors.CLIENT_CODE_INVALID);
        }
        if (verifyCode != forgotPasswordInfo.code) {
            await this.cacheManager.set(`${auth_constants_1.FORGOT_PASSWORD_CACHE}${email}`, JSON.stringify({ ...forgotPasswordInfo, attempt: forgotPasswordInfo.attempt + 1 }), {
                ttl: auth_constants_1.FORGOT_PASSWORD_EXPIRY,
            });
            throw new common_1.BadRequestException(exceptions_1.httpErrors.CLIENT_EXPIRED_CODE);
        }
        return client;
    }
    async changePassword(changePasswordDto) {
        const { email, password, newPassword } = changePasswordDto;
        const user = await this.clientModel.findOne({ email });
        const validatePassword = await bcrypt_1.validateHash(password, (user === null || user === void 0 ? void 0 : user.password) || '');
        if (!user || !validatePassword) {
            throw new common_1.BadRequestException(exceptions_1.httpErrors.USER_WRONG_PASSWORD);
        }
        const { hashPassword } = await bcrypt_1.generateHash(newPassword);
        await this.clientModel.updateOne({ _id: user.id }, { password: hashPassword });
    }
    async findAll(getUsersDto) {
        const { sort, page, limit, id, name, phone, pancake, code, email } = getUsersDto;
        const query = {};
        if (id) {
            query._id = id;
        }
        if (name) {
            query.name = name;
        }
        if (phone) {
            query.phone = phone;
        }
        if (pancake) {
            query.pancake = pancake;
        }
        if (code) {
            query.code = code;
        }
        if (email) {
            query.email = email;
        }
        const [result, total] = await Promise.all([
            this.clientModel
                .find(query)
                .skip((page - 1) * limit)
                .limit(limit)
                .sort({ createdAt: sort }),
            this.clientModel.find(query).countDocuments(),
        ]);
        return {
            result,
            total,
            lastPage: Math.ceil(total / limit),
        };
    }
    async findOrCreateFacebookUser(profile) {
        const client = await this.clientModel.findOne({ facebook_id: profile.id });
        if (client) {
            return this.clientModel.findByIdAndUpdate(client._id, {
                image_url: profile.picture.data.url,
                lastLoginAt: new Date(),
            }, { new: true });
        }
        return this.clientModel.create({
            facebook_id: profile.id,
            name: `${profile.first_name} ${profile.last_name}`,
            image_url: profile.picture.data.url,
            role: client_enum_1.ClientRole.khach_hang,
            last_login_at: new Date(),
            status: client_enum_1.ClientStatus.ACTIVE,
            is_verify: true,
        });
    }
    async findOrCreateGoogleUser(profile) {
        const { sub, picture, given_name, family_name, email } = profile.data;
        const client = await this.clientModel.findOne({ google_id: sub });
        if (client) {
            return this.clientModel.findByIdAndUpdate(client._id, {
                image_url: picture,
                last_login_at: new Date(),
                email,
            }, { new: true });
        }
        return this.clientModel.create({
            google_id: sub,
            name: `${given_name} ${family_name}`,
            image_url: picture,
            role: client_enum_1.ClientRole.khach_hang,
            last_login_at: new Date(),
            email,
            status: client_enum_1.ClientStatus.ACTIVE,
            is_verify: true,
        });
    }
    async searchClientInOrder(getClientByPhoneOrderDto) {
        const { phone } = getClientByPhoneOrderDto;
        const clients = await this.clientModel.aggregate([
            {
                $lookup: {
                    from: 'orders',
                    localField: '_id',
                    foreignField: 'client_id',
                    as: 'orders',
                },
            },
            {
                $lookup: {
                    from: 'orders_hikari',
                    localField: '_id',
                    foreignField: 'client_id',
                    as: 'hikariOrders',
                },
            },
            {
                $match: {
                    phone,
                    'hikariOrders.client_id': { $exists: false },
                    'orders.client_id': { $exists: true },
                },
            },
        ]);
        return clients;
    }
};
ClientService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_1.InjectModel(client_schema_1.Client.name)),
    tslib_1.__param(2, common_1.Inject(common_1.CACHE_MANAGER)),
    tslib_1.__metadata("design:paramtypes", [mongoose_2.Model,
        mail_service_1.MailService, Object])
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map