"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailConfig = void 0;
const index_1 = require("./index");
exports.mailConfig = {
    auth: {
        user: index_1.getConfig().get('mail.account'),
        pass: index_1.getConfig().get('mail.password'),
    },
    from: index_1.getConfig().get('mail.from'),
    service: index_1.getConfig().get('mail.service'),
    enable: index_1.getConfig().get('mail.enable') === 'true',
};
//# sourceMappingURL=mail.config.js.map