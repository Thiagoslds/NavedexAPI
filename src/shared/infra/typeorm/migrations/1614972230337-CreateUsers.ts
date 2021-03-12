import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1614972230337 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns:[
                {
                    name: 'id',
                    type: 'integer', 
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'  

                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'password',
                    type: 'varchar'
                },
                //criado e atualizado para facilitar logs 
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
