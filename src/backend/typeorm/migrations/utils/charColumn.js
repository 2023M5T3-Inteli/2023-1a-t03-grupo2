"use strict";
exports.__esModule = true;
exports.charColumn = void 0;
var charColumn = function (_a) {
    var _b = _a.name, name = _b === void 0 ? 'name' : _b, _c = _a.length, length = _c === void 0 ? '255' : _c;
    return ({
        name: name,
        type: 'char',
        length: length
    });
};
exports.charColumn = charColumn;
