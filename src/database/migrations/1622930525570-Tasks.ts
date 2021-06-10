import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Tasks1622930525570 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"tasks",
                columns: [
                    {
                        name:"id",
                        type:"uuid"
                    },
                    {
                        name:"id_task",
                        type:"integer",
                        isPrimary: true
                    },
                    {
                        name:"user_id",
                        type:"integer"
                    },
                    {
                        name:"title",
                        type:"varchar"
                    },
                    {
                        name:"description",
                        type:"varchar"
                    },
                    {
                        name:"category",
                        type:"varchar"
                    },
                    {
                        name:"id_category",
                        type:"integer"
                    },
                    {
                        name:"status",
                        type:"varchar"
                    },
                    {
                        name:"date_hours_final",
                        type:"timestamp",
                        isNullable : true
                    },
                    {
                        name:"date_hours_end",
                        type:"timestamp",
                        isNullable : true
                    },
                    {
                        name:"create_at",
                        type:"timestamp",
                        default:"now()"
                    },
                ],
                foreignKeys: [
                    {
                        name:"FKUser",
                        referencedTableName : "users",
                        referencedColumnNames : ["user_id"],
                        columnNames : ["user_id"], 
                        onDelete : "SET NULL",
                        onUpdate : "SET NULL",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tasks");
    }

}
