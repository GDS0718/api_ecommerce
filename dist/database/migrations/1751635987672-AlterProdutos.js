"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlterProdutos1751635987672 = void 0;
const typeorm_1 = require("typeorm");
class AlterProdutos1751635987672 {
    async up(queryRunner) {
        await queryRunner.addColumns("produtos", [
            new typeorm_1.TableColumn({
                name: "quantidade",
                type: "int",
                isNullable: false,
            }),
            new typeorm_1.TableColumn({
                name: "ncm",
                type: "char",
                length: "8",
                isNullable: false
            })
        ]);
    }
    async down(queryRunner) {
        await queryRunner.dropColumns("produtos", ["quantidade", "ncm"]);
    }
}
exports.AlterProdutos1751635987672 = AlterProdutos1751635987672;
