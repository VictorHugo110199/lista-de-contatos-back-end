import { MigrationInterface, QueryRunner } from "typeorm";

export class fixuser1679670439276 implements MigrationInterface {
    name = 'fixuser1679670439276'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "number" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "number"`);
    }

}
