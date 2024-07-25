"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseTransformInterceptor = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const configs_1 = require("../../configs");
let ResponseTransformInterceptor = class ResponseTransformInterceptor {
    intercept(context, next) {
        return next.handle().pipe(operators_1.map((_data) => {
            var _a, _b;
            const req = context.switchToHttp().getRequest();
            if (!_data) {
                return {
                    code: common_1.HttpStatus.OK,
                    data: null,
                    metadata: null,
                };
            }
            const metadata = Object.assign({}, _data.metadata);
            metadata.apiName = configs_1.getConfig().get('app.name');
            metadata.apiVersion = configs_1.getConfig().get('app.prefix');
            metadata.timestamp = new Date();
            if (((_a = _data === null || _data === void 0 ? void 0 : _data.data) === null || _a === void 0 ? void 0 : _a.length) || (_data === null || _data === void 0 ? void 0 : _data.length)) {
                metadata.length = ((_b = _data === null || _data === void 0 ? void 0 : _data.data) === null || _b === void 0 ? void 0 : _b.length) || (_data === null || _data === void 0 ? void 0 : _data.length);
            }
            if (req.query) {
                metadata.query = Object.assign({}, req.query);
            }
            delete _data.metadata;
            return {
                code: common_1.HttpStatus.OK,
                data: _data.data || _data,
                metadata: metadata,
            };
        }));
    }
};
ResponseTransformInterceptor = tslib_1.__decorate([
    common_1.Injectable()
], ResponseTransformInterceptor);
exports.ResponseTransformInterceptor = ResponseTransformInterceptor;
//# sourceMappingURL=response.interceptor.js.map