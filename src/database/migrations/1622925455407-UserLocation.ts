import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserLocation1622925455407 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name : "user_location",
                columns : [
                    {
                        name: "id",
                        type : "uuid",
                    },
                    {
                        name: "id_user_location",
                        type : "integer",
                        isPrimary : true
                    },
                    {
                        name: "id_info_point",
                        type : "integer",
                    },
                    {
                        name: "user_id",
                        type : "integer",
                    },
                    {
                        name: "location",
                        type : "varchar",
                    },
                    {
                        name: "create_at",
                        type : "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys :[
                    {
                        name:"FKId_info_point",
                        referencedTableName:"info_points",
                        referencedColumnNames:["id_info_point"],
                        columnNames:["id_info_point"],
                        onDelete : "SET NULL",
                        onUpdate : "SET NULL"
                    },
                    {
                        name:"FKUser",
                        referencedTableName : "users",
                        referencedColumnNames : ["user_id"],
                        columnNames : ["user_id"], 
                        onDelete : "SET NULL",
                        onUpdate : "SET NULL",
                    },
                ]    
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user_location");
    }

}
