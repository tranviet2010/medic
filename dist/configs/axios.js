"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const axiosInstance = (options = {}) => {
    const { headers = {}, baseUrl = '' } = options;
    return axios_1.default.create({
        baseURL: `${baseUrl}`,
        timeout: Number(process.env.REACT_APP_TIMEOUT),
        responseType: 'json',
        headers: Object.assign({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }, headers),
    });
};
exports.default = axiosInstance;
//# sourceMappingURL=axios.js.map