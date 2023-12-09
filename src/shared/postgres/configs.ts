import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import DatabaseLogger from './utils/database.logger';
import { EnvironmentVariables } from 'src/utils/config/env.validation';
import { Logger } from '@nestjs/common';

const internalLogger = new Logger('PG-INTERNAL');
const isSilent = process.env['NODE_ENV'] === 'production' || process.env['NODE_ENV'] === 'staging';

// For application
export function optionsFactory(configService: ConfigService<EnvironmentVariables>): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host: configService.get('DATABASE_HOST'),
    port: configService.get('DATABASE_PORT'),
    username: configService.get('DATABASE_USER'),
    password: configService.get('DATABASE_PASSWORD'),
    database: configService.get('DATABASE_NAME'),
    schema: configService.get('DATABASE_SCHEMA'),
    entities: [__dirname + '/schema/*{.ts,.js}'],
    synchronize: JSON.parse(process.env['DATABASE_SYNCHRONIZE']),
    autoLoadEntities: true,
    migrationsTableName: 'migrations',
    migrations: [__dirname + '/migration/*{.ts,.js}'],
    migrationsRun: true,
    verboseRetryLog: true,
    logger: new DatabaseLogger(),
    connectTimeoutMS: 10000,
    maxQueryExecutionTime: 20000,
    poolSize: configService.get('DATABASE_POOL_SIZE', 10, { infer: true }),
    extra: {
      idleTimeoutMillis: 60000,
      log: function (msg, err) {
        if (err) {
          internalLogger.error(msg + '.Detail: ' + err.message, err.stack);
        } else if (!isSilent) {
          internalLogger.log(msg);
        }
      },
    },
  };
}

// Manual load config when run from the cli
if (!process.env['DATABASE_HOST'] && (!process.env['NODE_ENV'] || process.env['NODE_ENV'] === 'local' || process.env['NODE_ENV'] === 'test')) {
  // eslint-disable-next-line
  require('dotenv').config();
}

// For cli migration
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env['DATABASE_HOST'],
  port: parseInt(process.env['DATABASE_PORT']),
  username: process.env['DATABASE_USER'],
  password: process.env['DATABASE_PASSWORD'],
  database: process.env['DATABASE_NAME'],
  schema: process.env['DATABASE_SCHEMA'],
  entities: [__dirname + '/schema/*.ts'],
  synchronize: JSON.parse(process.env['DATABASE_SYNCHRONIZE']),
  logger: new DatabaseLogger(),
  migrationsRun: false,
  migrationsTableName: 'migrations',
  migrations: [__dirname + '/migration/*{.ts,.js}'],
});
