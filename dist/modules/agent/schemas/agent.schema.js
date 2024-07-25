"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentSchema = exports.Agent = exports.AGENT_MODEL = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const partner_schema_1 = require("../../partner/schemas/partner.schema");
exports.AGENT_MODEL = 'agent';
let Agent = class Agent {
};
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Agent.prototype, "name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Agent.prototype, "phone", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Agent.prototype, "company_name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Agent.prototype, "address", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Agent.prototype, "email", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Agent.prototype, "note", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: mongoose_2.Types.ObjectId, ref: 'Partner', required: true }),
    tslib_1.__metadata("design:type", partner_schema_1.Partner)
], Agent.prototype, "partner", void 0);
Agent = tslib_1.__decorate([
    mongoose_1.Schema({ timestamps: true, collection: exports.AGENT_MODEL })
], Agent);
exports.Agent = Agent;
exports.AgentSchema = mongoose_1.SchemaFactory.createForClass(Agent);
//# sourceMappingURL=agent.schema.js.map