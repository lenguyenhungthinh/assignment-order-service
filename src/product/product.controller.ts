import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { Product } from 'src/shared/domain/entity/product.entity';
import { ProductService } from './service/product.service';
import { ProductDto } from './dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':id')
  async getProductById(@Param('id') id: string): Promise<Product> {
    return this.productService.getProductById(id);
  }

  @Get()
  async getList(): Promise<Product[]> {
    return this.productService.getProductList();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async save(@Body() product: ProductDto): Promise<void> {
    const entity = new Product(product);
    return this.productService.save(entity);
  }

  @Put()
  async update(@Body() product: Product): Promise<void> {
    return this.productService.update(product);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.productService.delete(id);
  }
}
