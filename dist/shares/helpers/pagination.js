"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagination = void 0;
function pagination(pageNumber, size) {
    const page = pageNumber ? pageNumber : 1;
    const limit = size ? size : 10;
    return [page, limit];
}
exports.pagination = pagination;
//# sourceMappingURL=pagination.js.map