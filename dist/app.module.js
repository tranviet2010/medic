"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModules = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const modules_1 = require("./modules");
const logger_middleware_1 = require("./shares/middlewares/logger.middleware");
let AppModules = class AppModules {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).exclude('/api/v1/ping').forRoutes('/');
    }
};
AppModules = tslib_1.__decorate([
    common_1.Module({
        imports: [...modules_1.default],
        controllers: [],
        providers: [common_1.Logger],
    })
], AppModules);
exports.AppModules = AppModules;
//# sourceMappingURL=app.module.js.map