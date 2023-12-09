/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RepositoryModule } from './shared/repository/repository.module';
import { ApiModule } from './shared/api/api.module';
import { validate } from './utils/config/env.validation';
import { HealthModule } from './shared/health/health.module';
import { getLoggerOptions } from './utils/config/logger.config';
import { LoggerModule } from './shared/logger/logger.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validate,
    }),
    LoggerModule.forRoot(getLoggerOptions()),
    RepositoryModule,
    ApiModule,
    HealthModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
