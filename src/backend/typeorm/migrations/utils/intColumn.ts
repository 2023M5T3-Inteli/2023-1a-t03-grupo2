import { TableColumnOptions } from "typeorm"
import { ColumnType } from "../types/ColumnTypes";


export const intColumn = ({name} : ColumnType): TableColumnOptions => ({
    name,
    type: 'int',
});