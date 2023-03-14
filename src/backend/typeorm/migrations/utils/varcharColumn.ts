import { TableColumnOptions } from "typeorm"
import { VarCharDto } from "typeorm/migrations/types/VarCharType";


export const varcharColumn = ({name ="null", length = '255'}: VarCharDto): TableColumnOptions => ({
    name,
    type: 'varchar',
    length 
});