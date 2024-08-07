
import { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Height, HeightDocument } from './schemas/height.schema';


@Injectable()
export class HeightService {
    constructor(@InjectModel(Height.name) private readonly HeightModel: Model<HeightDocument>) { }

    async createParam(params: Height): Promise<HeightDocument> {
        return this.HeightModel.create(params)
    }
    async findAll(query: Height) {
        let value = await this.HeightModel.find(query).exec()
        return value

    }

    async findByQuery(query: Height) {
        //ham tim kiem ngay gan dung => tra ra ket qua
        const { number_day, height, weight, male } = query
        const results = await this.HeightModel.find({ male }).sort({ number_day: 1 })
        const get20Result = results[results.length - 1]

        let getEnd = JSON.parse(JSON.stringify(get20Result));
        delete getEnd._id;

        const valueFin = this.findClosest(results, number_day)
        const getHeight = height ? this.getHeightBasedData(height, valueFin) : null
        const getWeight = weight ? this.getWeightBasedData(weight, valueFin) : null
        const get20Height = getHeight ? this.getMatchingKey(getHeight, getEnd) : null
        const get20Weight = getWeight ? this.getMatchingKey(getWeight, getEnd) : null

        return [getHeight, getWeight, get20Height, get20Weight]


    }

    async updateParam(id: string, updateParam: Height): Promise<Height> {
        const param = await this.HeightModel.findByIdAndUpdate(id, updateParam, { new: true })
        if (!param) {
            throw new NotFoundException("user with id ${id} not found")
        }
        return param

    }

    findClosest(arr: any, targetNumber: any) {
        let closestObject = null;
        let closestDiff = Infinity;

        arr.forEach(obj => {
            // Kiểm tra nếu number_day là một số hợp lệ
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
        return newObj
    }

    getHeightBasedData(inputHeight: string | any, obj: any): number | null {
        const height = parseFloat(obj.height);
        const inputNum = parseFloat(inputHeight);
        if (isNaN(inputNum)) {
            throw new Error("Invalid inputHeight value. Must be a number.");
        }

        let heights: { [key: string]: string };
        let compareFunc: (h: number) => boolean;

        if (inputNum == height) {
            const result: any = { height: obj.height }
            return result
        }

        if (inputNum > height) {
            heights = obj.up_height;
            compareFunc = (h) => h <= inputNum; // Tìm giá trị nhỏ hơn hoặc bằng inputHeight
        } else {
            heights = obj.dow_height;
            compareFunc = (h) => h >= inputNum; // Tìm giá trị lớn hơn hoặc bằng inputHeight
        }
        let closestHeightKey: string | null = null;
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
            const result: any = {};
            result[closestHeightKey] = heights[closestHeightKey];
            return result;
        }

        return null;
    }

    getWeightBasedData(inputWeight: string | any, obj: any): number | null {
        const weight = parseFloat(obj.weight);
        const inputNum = parseFloat(inputWeight);
        if (isNaN(inputNum)) {
            throw new Error("Invalid inputHeight value. Must be a number.");
        }

        if (inputNum == weight) {
            const result: any = { weight: obj.weight }
            return result
        }

        let weights: { [key: string]: string };
        let compareFunc: (h: number) => boolean;

        if (inputNum > weight) {
            weights = obj.up_weight;
            compareFunc = (h) => h <= inputNum; // Tìm giá trị nhỏ hơn hoặc bằng inputHeight
        } else {
            weights = obj.dow_weight;
            compareFunc = (h) => h >= inputNum; // Tìm giá trị lớn hơn hoặc bằng inputHeight
        }
        let closestWeightKey: string | null = null;
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
            const result: any = {};
            result[closestWeightKey] = weights[closestWeightKey];
            return result;
        }

        return null;
    }

    getMatchingKey(valueToFind: any, dataObject: any) {
        // Lấy key từ object valueToFind
        const keyToFind = Object.keys(valueToFind)[0];

        // Hàm đệ quy để tìm key trong đối tượng
        function findKey(obj: any) {
            if (obj?.hasOwnProperty(keyToFind)) {
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

}