import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProjectToNaver1615225167965 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'projecttonaver',
                columns:[
                {
                    name: 'id',
                    type: 'integer', 
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'  
                },
                {
                    name: 'naver_id',
                    type: 'int',
                    isNullable: true
                },
                {
                    name: 'project_id',
                    type: 'int',
                    isNullable: true
                }
            ]
            })
        );

        await queryRunner.createForeignKey(
            'projecttonaver',
            new TableForeignKey({
                name: 'PTNNaver',
                columnNames: ['naver_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'navers',
                onDelete: 'SET NULL', 
                onUpdate: 'CASCADE' 
            })
        );

        await queryRunner.createForeignKey(
            'projecttonaver',
            new TableForeignKey({
                name: 'PTNProject',
                columnNames: ['project_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'projects',
                onDelete: 'SET NULL', 
                onUpdate: 'CASCADE' 
            })
        );   
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('projecttonaver', 'PTNNaver');
        await queryRunner.dropForeignKey('projecttonaver', 'PTNProject');
        await queryRunner.dropTable('projecttonaver');
    }
}
