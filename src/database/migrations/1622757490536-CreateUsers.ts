import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1622757490536 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns:[
                    {
                        name: "id",
                        type: "uuid"
                    },
                    {
                        name: "user_id",
                        type: "integer",
                        isPrimary:true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "company",
                        type: "varchar"
                    },
                    {
                        name: "password",
                        type: "varchar"
                    },
                    {
                        name: "hours_start",
                        type: "timestamp"
                    },
                    {
                        name: "hours_end",
                        type: "timestamp"
                    },
                    {
                        name: "create_ad",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
