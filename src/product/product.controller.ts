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

//help me create body post
// {
//   "name": "kayak",
//   "price": 1000,
//   "description": "kayak kayak kayak ka",
//   "image": "https://https://images.pexels.com/photos/241044/pexels-photo-241044.jpeg",
//   "largeImage": "https://images.pexels.com/photos/241044/pexels-photo-241044.jpeg",
//   "discount": 0,
//   "discountAmount": 0
// }
//help me create another body post
// {
//   "name": "basketball",
//   "price": 1000,
//   "description": "basketball basketball basketball",
//   "image": "https://images.pexels.com/photos/241044/pexels-photo-241044.jpeg",
//   "largeImage": "https://images.pexels.com/photos/241044/pexels-photo-241044.jpeg",
//   "discount": 0,
//   "discountAmount": 0
// }
//help me create another body post
// {
//   "name": "football",
//   "price": 1000,
//   "description": "football football football",
//   "image": "https://images.pexels.com/photos/241044/pexels-photo-241044.jpeg",
//   "largeImage": "https://images.pexels.com/photos/241044/pexels-photo-241044.jpeg",
//   "discount": 0,
//   "discountAmount": 0
// }
