import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { optionsFactory } from './configs';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: optionsFactory,
      inject: [ConfigService],
    }),
  ],
})
export class PostgresModule {}
