"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDecimal = exports.Options = exports.mongodb = void 0;
const index_1 = require("./index");
const mongoose_aggregate_paginate_v2_1 = require("../shares/libs/mongoose-aggregate-paginate-v2");
const addedPaginate = require('mongoose-aggregate-paginate-v2');
const mongoose_1 = require("mongoose");
exports.mongodb = {
    uri: index_1.getConfig().get('mongodb.uri'),
    options: {
        directConnection: true,
        connectionFactory: (connection) => {
            connection.plugin(addedPaginate);
            connection.plugin(mongoose_aggregate_paginate_v2_1.default);
            return connection;
        },
    },
};
exports.Options = {
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: function (_, ret) {
            delete ret.id;
            delete ret.__v;
            return exports.formatDecimal(ret);
        },
    },
    toObject: {
        virtuals: true,
        transform: function (_, ret) {
            delete ret.id;
            delete ret.__v;
            return exports.formatDecimal(ret);
        },
    },
};
const formatDecimal = (ret) => {
    if (ret instanceof mongoose_1.Types.Decimal128) {
        return ret.toString();
    }
    if (Array.isArray(ret)) {
        ret.forEach((_, i) => (ret[i] = exports.formatDecimal(ret[i])));
        return ret;
    }
    if (typeof ret === "object") {
        try {
            for (const key of Object.keys(ret)) {
                ret[key] = exports.formatDecimal(ret[key]);
            }
        }
        catch { }
        return ret;
    }
    return ret;
};
exports.formatDecimal = formatDecimal;
//# sourceMappingURL=database.config.js.map