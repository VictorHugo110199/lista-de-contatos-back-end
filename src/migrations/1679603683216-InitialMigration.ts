import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1679603683216 implements MigrationInterface {
    name = 'InitialMigration1679603683216'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "number" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "number"`);
    }

}
