"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./schemas/user.schema");
const user_enum_1 = require("../../shares/enums/user.enum");
const exceptions_1 = require("../../shares/exceptions");
const bcrypt_1 = require("../../shares/helpers/bcrypt");
const pagination_dto_1 = require("../../shares/dtos/pagination.dto");
let UserService = class UserService {
    constructor(userModel, cacheManager) {
        this.userModel = userModel;
        this.cacheManager = cacheManager;
    }
    async createUser(createUserDto) {
        const { email, password } = createUserDto;
        const user = await this.userModel.findOne({ email });
        if (user) {
            throw new common_1.BadRequestException(exceptions_1.httpErrors.ACCOUNT_EXISTED);
        }
        const { hashPassword } = await bcrypt_1.generateHash(password);
        return this.userModel.create({ ...createUserDto, password: hashPassword, status: user_enum_1.UserStatus.ACTIVE });
    }
    async findAll(getUsersDto) {
        const { sort, page, limit, id, name } = getUsersDto;
        const query = {};
        if (id) {
            query._id = id;
        }
        if (name) {
            query.name = name;
        }
        const [result, total] = await Promise.all([
            this.userModel
                .find(query)
                .skip((page - 1) * limit)
                .limit(limit)
                .sort({ createdAt: sort }),
            this.userModel.find(query).countDocuments(),
        ]);
        return {
            result,
            total,
            lastPage: Math.ceil(total / limit),
        };
    }
    async findOne(condition, selectPassword = false) {
        if (selectPassword) {
            return this.userModel.findOne(condition).select('+password').lean();
        }
        return this.userModel.findOne(condition).select('-password').lean();
    }
    async findById(_id) {
        return this.userModel.findById({ _id }).select('-password').lean();
    }
};
UserService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_1.InjectModel(user_schema_1.User.name)),
    tslib_1.__param(1, common_1.Inject(common_1.CACHE_MANAGER)),
    tslib_1.__metadata("design:paramtypes", [mongoose_2.Model, Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map