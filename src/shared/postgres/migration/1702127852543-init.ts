import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1702127852543 implements MigrationInterface {
  name = 'Init1702127852543'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "product" ("is_valid" boolean NOT NULL DEFAULT TRUE,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(),
    "id" CHARACTER VARYING(36) NOT NULL,
    "name" CHARACTER VARYING(50) NOT NULL,
    "price" NUMERIC NOT NULL DEFAULT '0',
    "description" CHARACTER VARYING(255),
    "image" CHARACTER VARYING(255),
    "largeImage" CHARACTER VARYING(255),
    "discount" NUMERIC DEFAULT '0',
    "discountAmount" NUMERIC DEFAULT '0',
    CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "product"`);
  }

}
