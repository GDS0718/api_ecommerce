import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class AlterProdutos1751635987672 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns("produtos", [
            new TableColumn({
                name: "quantidade",
                type: "int",
                isNullable: false,
            }),
            new TableColumn({
                name: "ncm",
                type: "char",
                length: "8",
                isNullable: false
            })
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns("produtos", ["quantidade", "ncm"])
    }

}
