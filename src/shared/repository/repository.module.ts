import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresModule } from '../postgres/postgres.module';
import { PostgreSchemas } from '../postgres/schema';
import { Repositories } from './impl';

@Global()
@Module({
  imports: [PostgresModule, TypeOrmModule.forFeature(PostgreSchemas)],
  providers: [...Repositories],
  exports: [...Repositories],
})
export class RepositoryModule {}
