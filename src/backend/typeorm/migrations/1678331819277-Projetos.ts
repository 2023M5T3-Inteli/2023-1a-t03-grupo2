import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { varcharColumn } from "./utils/varcharColumn"
import { idColumn } from "./utils/idColumn"
import { charColumn } from "./utils/charColumn"
import { intColumn } from "./utils/intColumn"

export class Projetos1678331819277 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(new Table({
                name:'Projetos',
                columns: [
                    idColumn({name: 'id'}),
                    varcharColumn({length: '75'}),
                    charColumn({ name: 'Projetos' ,length: '255'}),
                    intColumn({name: 'First'})
                ]
            }))
            
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Projetos')
    }

}
