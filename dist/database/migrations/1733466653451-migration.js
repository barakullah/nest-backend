"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration1733466653451 = void 0;
class Migration1733466653451 {
    constructor() {
        this.name = 'Migration1733466653451';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`role\` enum ('admin', 'user') NOT NULL DEFAULT 'user', \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`user\``);
    }
}
exports.Migration1733466653451 = Migration1733466653451;
//# sourceMappingURL=1733466653451-migration.js.map