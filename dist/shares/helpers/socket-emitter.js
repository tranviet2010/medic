"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketEmitter = void 0;
const common_1 = require("@nestjs/common");
const redis_emitter_1 = require("@socket.io/redis-emitter");
const redis_1 = require("redis");
const redis_config_1 = require("../../configs/redis.config");
class SocketEmitter {
    constructor() {
        const redisClient = redis_1.createClient(redis_config_1.redisConfig.port, redis_config_1.redisConfig.host);
        this.io = new redis_emitter_1.Emitter(redisClient);
        this.logger = new common_1.Logger(SocketEmitter.name);
    }
    static getInstance() {
        if (!SocketEmitter.instance) {
            SocketEmitter.instance = new SocketEmitter();
        }
        return SocketEmitter.instance;
    }
    emitNotifications(notifications, userId) {
        this.io.to(`${userId}`).emit(`notifications`, notifications);
    }
}
exports.SocketEmitter = SocketEmitter;
//# sourceMappingURL=socket-emitter.js.map