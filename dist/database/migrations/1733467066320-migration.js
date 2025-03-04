"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration1733467066320 = void 0;
class Migration1733467066320 {
    constructor() {
        this.name = 'Migration1733467066320';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`password\` varchar(255) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
    }
}
exports.Migration1733467066320 = Migration1733467066320;
//# sourceMappingURL=1733467066320-migration.js.map