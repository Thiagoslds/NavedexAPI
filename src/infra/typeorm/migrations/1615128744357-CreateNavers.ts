import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class CreateNavers1615128744357 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'navers',
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
                    name: 'birthdate',
                    type: 'timestamp'
                },
                {
                    name: 'admission_date',
                    type: 'timestamp'
                },
                {
                    name: 'job_role',
                    type: 'varchar'
                },
                {
                    name: 'user_id',
                    type: 'int',
                    isNullable: true
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
        );

        await queryRunner.createForeignKey(
            'navers',
            new TableForeignKey({
                name: 'NaverUser',
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'SET NULL', 
                onUpdate: 'CASCADE'
            })
        )

        await queryRunner.query(`ALTER TABLE navers ADD COLUMN projects int[]`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('navers', 'projects')
        await queryRunner.dropForeignKey('navers', 'NaverUser');
        await queryRunner.dropTable('navers');
    }

}


