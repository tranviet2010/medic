"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformInterceptor = void 0;
const operators_1 = require("rxjs/operators");
class TransformInterceptor {
    intercept(context, next) {
        return next.handle().pipe(operators_1.map((data) => ({ data })));
    }
}
exports.TransformInterceptor = TransformInterceptor;
//# sourceMappingURL=transform.interceptor%20.js.map