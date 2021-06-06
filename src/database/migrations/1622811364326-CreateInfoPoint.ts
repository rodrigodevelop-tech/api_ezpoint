import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateInfoPoint1622811364326 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "info_points",
                columns: [
                    {
                        name:"id",
                        type: "uuid"
                    },
                    {
                        name:"id_info_point",
                        type: "integer",
                        isPrimary: true
                    },
                    {
                        name:"user_id",
                        type: "integer"
                    },
                    {
                        name:"date_hours_start",
                        type: "timestamp"
                    },
                    {
                        name:"date_hours_end",
                        type: "timestamp",
                        isNullable : true
                    },
                    {
                        name:"create_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys:[
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
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("info_points");
    }

}
