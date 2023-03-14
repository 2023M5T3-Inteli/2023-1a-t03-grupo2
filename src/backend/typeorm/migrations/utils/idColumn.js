"use strict";
exports.__esModule = true;
exports.idColumn = void 0;
var idColumn = function (_a) {
    var _b = _a.name, name = _b === void 0 ? 'id' : _b;
    return ({
        name: name,
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
    });
};
exports.idColumn = idColumn;
