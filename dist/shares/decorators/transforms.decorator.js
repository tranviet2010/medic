"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToBoolean = exports.ToArray = exports.ToInt = exports.ToLowerCase = exports.Trim = void 0;
const class_transformer_1 = require("class-transformer");
const lodash_1 = require("lodash");
function Trim() {
    return class_transformer_1.Transform((params) => {
        const value = params.value;
        if (Array.isArray(value)) {
            return value.map((v) => lodash_1.trim(v).replace(/\s\s+/g, ' '));
        }
        return lodash_1.trim(value).replace(/\s\s+/g, ' ');
    });
}
exports.Trim = Trim;
function ToLowerCase() {
    return class_transformer_1.Transform((params) => {
        const value = params.value;
        if (Array.isArray(value)) {
            return value.map((v) => v.toString().toLowerCase());
        }
        return value.toString().toLowerCase();
    });
}
exports.ToLowerCase = ToLowerCase;
function ToInt() {
    return class_transformer_1.Transform((params) => {
        const value = params.value;
        return Number.parseInt(value, 10);
    }, { toClassOnly: true });
}
exports.ToInt = ToInt;
function ToArray() {
    return class_transformer_1.Transform((params) => {
        const value = params.value;
        if (lodash_1.isNil(value)) {
            return [];
        }
        return lodash_1.castArray(value);
    }, { toClassOnly: true });
}
exports.ToArray = ToArray;
const ToBoolean = () => {
    const toPlain = class_transformer_1.Transform(({ value }) => {
        return value;
    }, {
        toPlainOnly: true,
    });
    const toClass = (target, key) => {
        return class_transformer_1.Transform(({ obj }) => {
            return valueToBoolean(obj[key]);
        }, {
            toClassOnly: true,
        })(target, key);
    };
    return function (target, key) {
        toPlain(target, key);
        toClass(target, key);
    };
};
exports.ToBoolean = ToBoolean;
const valueToBoolean = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === 'boolean') {
        return value;
    }
    if (['true', 'on', 'yes', '1'].includes(value.toLowerCase())) {
        return true;
    }
    if (['false', 'off', 'no', '0'].includes(value.toLowerCase())) {
        return false;
    }
    return undefined;
};
//# sourceMappingURL=transforms.decorator.js.map