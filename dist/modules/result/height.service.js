"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeightService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const result_schema_1 = require("./schemas/result.schema");
let HeightService = class HeightService {
    constructor(HeightModel) {
        this.HeightModel = HeightModel;
    }
    async createParam(params) {
        return this.HeightModel.create(params);
    }
    async findAll(query) {
        let value = await this.HeightModel.find(query).exec();
        return value;
    }
    async findByQuery(query) {
        const { number_day, height, weight } = query;
        const results = await this.HeightModel.find({}).sort({ number_day: 1 });
        const get20Result = results[results.length - 1];
        let getEnd = JSON.parse(JSON.stringify(get20Result));
        delete getEnd._id;
        const valueFin = this.findClosest(results, number_day);
        const getHeight = height ? this.getHeightBasedData(height, valueFin) : null;
        const getWeight = weight ? this.getWeightBasedData(weight, valueFin) : null;
        const get20Height = getHeight ? this.getMatchingKey(getHeight, getEnd) : null;
        const get20Weight = getWeight ? this.getMatchingKey(getWeight, getEnd) : null;
        return [getHeight, getWeight, get20Height, get20Weight];
    }
    async updateParam(id, updateParam) {
        const param = await this.HeightModel.findByIdAndUpdate(id, updateParam, { new: true });
        if (!param) {
            throw new common_1.NotFoundException("user with id ${id} not found");
        }
        return param;
    }
    findClosest(arr, targetNumber) {
        let closestObject = null;
        let closestDiff = Infinity;
        arr.forEach(obj => {
            if (typeof obj.number_day === 'number') {
                const diff = Math.abs(targetNumber - obj.number_day);
                if (diff < closestDiff) {
                    closestDiff = diff;
                    closestObject = obj;
                }
            }
        });
        let newObj = JSON.parse(JSON.stringify(closestObject));
        delete newObj._id;
        return newObj;
    }
    getHeightBasedData(inputHeight, obj) {
        const height = parseFloat(obj.height);
        const inputNum = parseFloat(inputHeight);
        if (isNaN(inputNum)) {
            throw new Error("Invalid inputHeight value. Must be a number.");
        }
        let heights;
        let compareFunc;
        if (inputNum == height) {
            const result = { height: obj.height };
            return result;
        }
        if (inputNum > height) {
            heights = obj.up_height;
            compareFunc = (h) => h <= inputNum;
        }
        else {
            heights = obj.dow_height;
            compareFunc = (h) => h >= inputNum;
        }
        let closestHeightKey = null;
        let smallestDiff = Infinity;
        for (let key in heights) {
            if (heights.hasOwnProperty(key)) {
                let h = parseFloat(heights[key]);
                if (compareFunc(h)) {
                    let diff = Math.abs(h - inputNum);
                    if (diff < smallestDiff) {
                        smallestDiff = diff;
                        closestHeightKey = key;
                    }
                }
            }
        }
        if (closestHeightKey !== null) {
            const result = {};
            result[closestHeightKey] = heights[closestHeightKey];
            return result;
        }
        return null;
    }
    getWeightBasedData(inputWeight, obj) {
        const weight = parseFloat(obj.weight);
        const inputNum = parseFloat(inputWeight);
        if (isNaN(inputNum)) {
            throw new Error("Invalid inputHeight value. Must be a number.");
        }
        if (inputNum == weight) {
            const result = { weight: obj.weight };
            return result;
        }
        let weights;
        let compareFunc;
        if (inputNum > weight) {
            weights = obj.up_weight;
            compareFunc = (h) => h <= inputNum;
        }
        else {
            weights = obj.dow_weight;
            compareFunc = (h) => h >= inputNum;
        }
        let closestWeightKey = null;
        let smallestDiff = Infinity;
        for (let key in weights) {
            if (weights.hasOwnProperty(key)) {
                let h = parseFloat(weights[key]);
                if (compareFunc(h)) {
                    let diff = Math.abs(h - inputNum);
                    if (diff < smallestDiff) {
                        smallestDiff = diff;
                        closestWeightKey = key;
                    }
                }
            }
        }
        if (closestWeightKey !== null) {
            const result = {};
            result[closestWeightKey] = weights[closestWeightKey];
            return result;
        }
        return null;
    }
    getMatchingKey(valueToFind, dataObject) {
        const keyToFind = Object.keys(valueToFind)[0];
        function findKey(obj) {
            if (obj === null || obj === void 0 ? void 0 : obj.hasOwnProperty(keyToFind)) {
                return { [keyToFind]: obj[keyToFind] };
            }
            for (const key in obj) {
                if (typeof obj[key] === 'object') {
                    const result = findKey(obj[key]);
                    if (result) {
                        return result;
                    }
                }
            }
            return null;
        }
        return findKey(dataObject);
    }
};
HeightService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_2.InjectModel(result_schema_1.Height.name)),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], HeightService);
exports.HeightService = HeightService;
//# sourceMappingURL=height.service.js.map