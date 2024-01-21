import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductService } from './service/product.service';
import { ProductDto } from './dto/product.dto';
import { Ctx, EventPattern, KafkaContext, Payload } from '@nestjs/microservices';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @EventPattern('product_creation')
  @UsePipes(new ValidationPipe({ 
    transform: true, 
    transformOptions: { enableImplicitConversion: true } }))
  async siSubmitEvent(
    @Payload() request: ProductDto,
    @Ctx() context: KafkaContext,
  ): Promise<void> {
    return await this.productService.save(request);
  }


}
