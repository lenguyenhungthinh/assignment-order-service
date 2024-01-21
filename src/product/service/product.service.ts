import { Inject } from '@nestjs/common';
import { Product } from 'src/shared/domain/entity/product.entity';
import { ProductRepository, ProductRepositoryName } from 'src/shared/domain/repository/product.repository.interface';
import { ProductDto } from '../dto/product.dto';

export class ProductService {
  constructor(
    @Inject(ProductRepositoryName)
    private readonly productRepository: ProductRepository,
  ) {}

  async save(dto: ProductDto): Promise<void> {
    // Mock logic to save a product
    const product = new Product({
      id: dto.id,
      name: dto.name,
      price: dto.price,
      description: dto.description,
      image: dto.image,
      largeImage: dto.largeImage,
      discount: dto.discount,
      discountAmount: dto.discountAmount,
      createdAt: dto.createdAt,
      updatedAt: dto.updatedAt,
    });
    const saved = await this.productRepository.save(product);
  }
}
