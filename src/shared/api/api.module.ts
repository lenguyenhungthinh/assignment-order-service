import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';
import { Apis } from './impl';
import { KAFKA_CLIENT, configKafkaEventFactory } from 'src/utils/config';

@Global()
@Module({
  imports: [
    HttpModule,
    ClientsModule.registerAsync([
      {
        name: KAFKA_CLIENT,
        useFactory: configKafkaEventFactory,
        inject: [ConfigService],
      },
    ]),
  ],
  providers: [...Apis],
  exports: [...Apis],
})
export class ApiModule {}
