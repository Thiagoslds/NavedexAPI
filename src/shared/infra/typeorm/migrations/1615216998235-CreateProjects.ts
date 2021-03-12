import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProjects1615216998235 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'projects',
                columns:[
                {
                    name: 'id',
                    type: 'integer', 
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment' 
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'created_at',
                    type: 'timestamp', 
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp', 
                    default: 'now()'
                }
            ]
            })
        )

        await queryRunner.query(`ALTER TABLE projects ADD COLUMN navers int[]`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('projects', 'navers')
        await queryRunner.dropTable('projects');
    }

}
