"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration1733398336792 = void 0;
class Migration1733398336792 {
    constructor() {
        this.name = 'Migration1733398336792';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`role\` enum ('admin', 'user') NOT NULL DEFAULT 'user', \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`user\``);
    }
}
exports.Migration1733398336792 = Migration1733398336792;
//# sourceMappingURL=1733398336792-migration.js.map