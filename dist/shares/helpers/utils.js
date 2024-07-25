"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortHistories = exports.checkElementsExist = exports.sortArrayByCreatedAt = exports.convertDataExcel = exports.decimalToString = exports.randomCodeNumber = exports.getTimeStampSecond = exports.uid = exports.sleep = void 0;
const short_unique_id_1 = require("short-unique-id");
const xlsx = require("xlsx");
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
exports.sleep = sleep;
exports.uid = new short_unique_id_1.default({ dictionary: 'hex', length: 15 });
const getTimeStampSecond = (time) => {
    return Math.floor(time / 1000);
};
exports.getTimeStampSecond = getTimeStampSecond;
const randomCodeNumber = (number = 6) => {
    let randomCode = '';
    for (let i = 0; i < number; i++) {
        const code = Math.floor(Math.random() * 10);
        randomCode = randomCode + code;
    }
    return randomCode;
};
exports.randomCodeNumber = randomCodeNumber;
const decimalToString = (data) => {
    if (Array.isArray(data)) {
        return data.map((item) => exports.decimalToString(item));
    }
    else if (typeof data === 'object' && data !== null) {
        const keys = Object.keys(data);
        keys.forEach((key) => {
            data[key] = data[key].constructor.name === 'Decimal128' ? parseFloat(data[key].toString()) : data[key];
        });
        return data;
    }
    else {
        return data;
    }
};
exports.decimalToString = decimalToString;
const convertDataExcel = async (file) => {
    const workbook = xlsx.read(file.buffer, { type: 'buffer' });
    const sheets = workbook.SheetNames[0];
    const data = [];
    for (let i = 0; i < sheets.length; i++) {
        const temp = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[i]]);
        temp.forEach((res, rowIndex) => {
            console.log(res);
            data.push(Object.assign(Object.assign({}, res), { row: rowIndex + 1 }));
        });
    }
    return data;
};
exports.convertDataExcel = convertDataExcel;
const sortArrayByCreatedAt = (array, sortOrder) => {
    return array.sort((a, b) => {
        if (sortOrder === 1) {
            if (a.createdAt < b.createdAt) {
                return -1;
            }
            if (a.createdAt > b.createdAt) {
                return 1;
            }
        }
        else if (sortOrder === -1) {
            if (a.createdAt > b.createdAt) {
                return -1;
            }
            if (a.createdAt < b.createdAt) {
                return 1;
            }
        }
        return 0;
    });
};
exports.sortArrayByCreatedAt = sortArrayByCreatedAt;
const checkElementsExist = (sourceArray, targetArray) => {
    return sourceArray.some((element) => targetArray.includes(element));
};
exports.checkElementsExist = checkElementsExist;
const sortHistories = (histories) => {
    return histories
        .sort((a, b) => b.created_at - a.created_at)
        .map((_) => {
        var _a, _b, _c;
        return {
            info: (_ === null || _ === void 0 ? void 0 : _.info) ? JSON.parse(_ === null || _ === void 0 ? void 0 : _.info) : '',
            create_by: (_a = _ === null || _ === void 0 ? void 0 : _.create_by) === null || _a === void 0 ? void 0 : _a.name,
            update_by: (_b = _ === null || _ === void 0 ? void 0 : _.update_by) === null || _b === void 0 ? void 0 : _b.name,
            delete_by: (_c = _ === null || _ === void 0 ? void 0 : _.delete_by) === null || _c === void 0 ? void 0 : _c.name,
            created_at: _ === null || _ === void 0 ? void 0 : _.created_at,
        };
    });
};
exports.sortHistories = sortHistories;
//# sourceMappingURL=utils.js.map