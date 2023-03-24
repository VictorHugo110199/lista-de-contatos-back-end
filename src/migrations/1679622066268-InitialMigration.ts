import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1679622066268 implements MigrationInterface {
    name = 'InitialMigration1679622066268'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isActive"`);
    }

}
