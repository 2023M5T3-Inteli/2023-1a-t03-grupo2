import { TableColumnOptions } from "typeorm"


export const timeColumn = (name = "Criado no horário"): TableColumnOptions => ({
    name,
    type: 'timestamp',
    default: 'CURRENT_TIMESTAMP_'
});