import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ClientsModule } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { KAFKA_CLIENT, configKafkaEventFactory } from 'src/utils/config';
import { ProductService } from './service/product.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: KAFKA_CLIENT,
        useFactory: configKafkaEventFactory,
        inject: [ConfigService],
      },
    ]),
  ],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
