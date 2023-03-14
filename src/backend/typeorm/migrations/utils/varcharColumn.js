"use strict";
exports.__esModule = true;
exports.varcharColumn = void 0;
var varcharColumn = function (_a) {
    var _b = _a.name, name = _b === void 0 ? "null" : _b, _c = _a.length, length = _c === void 0 ? '255' : _c;
    return ({
        name: name,
        type: 'varchar',
        length: length
    });
};
exports.varcharColumn = varcharColumn;
