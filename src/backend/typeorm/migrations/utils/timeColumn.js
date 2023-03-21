"use strict";
exports.__esModule = true;
exports.timeColumn = void 0;
var timeColumn = function (name) {
    if (name === void 0) { name = "Criado no horário"; }
    return ({
        name: name,
        type: 'timestamp',
        "default": 'CURRENT_TIMESTAMP_'
    });
};
exports.timeColumn = timeColumn;
