import {MigrationInterface, QueryRunner} from "typeorm";

export class createStudent1653143357691 implements MigrationInterface {
    name = 'createStudent1653143357691'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`student\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`age\` int NOT NULL, \`codeExperience\` varchar(255) NOT NULL, \`codeLanguage\` varchar(255) NOT NULL, \`reason\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`student\``);
    }

}
