import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1702127852543 implements MigrationInterface {
    name = 'Init1702127852543'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("is_valid" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "id" character varying(36) NOT NULL, "name" character varying(50) NOT NULL, "price" integer NOT NULL DEFAULT '0', "description" character varying(255), "image" character varying(255), "largeImage" character varying(255), "discount" integer DEFAULT '0', "discountAmount" integer DEFAULT '0', CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
