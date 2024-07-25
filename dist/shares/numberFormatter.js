"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToDecimal = exports.formatNumber = void 0;
const formatNumber = (number, precision, zeroValue) => {
    if (number === undefined || number === null || number === '' || Number(number) == NaN) {
        return zeroValue;
    }
    return Number(number)
        .toFixed(precision)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,');
};
exports.formatNumber = formatNumber;
const hexToDecimal = (hex) => parseInt(hex, 16);
exports.hexToDecimal = hexToDecimal;
//# sourceMappingURL=numberFormatter.js.map