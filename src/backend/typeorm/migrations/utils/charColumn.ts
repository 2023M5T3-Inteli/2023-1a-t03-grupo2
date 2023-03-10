import { TableColumnOptions } from "typeorm"
import { CharDto } from "../types/CharType";


export const charColumn = ({name = 'name', length = '255'}: CharDto): TableColumnOptions => ({
    name,
    type: 'char',
    length 
});