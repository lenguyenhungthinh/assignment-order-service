import { Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Product } from 'src/shared/domain/entity/product.entity';
import { ProductRepository, ProductRepositoryName } from 'src/shared/domain/repository/product.repository.interface';
import { KAFKA_CLIENT } from 'src/utils/config';

export class ProductService {
  constructor(
    @Inject(KAFKA_CLIENT)
    private readonly client: ClientKafka,
    @Inject(ProductRepositoryName)
    private readonly productRepository: ProductRepository,
  ) {}

  async getProductById(_id: string): Promise<Product> {
    // Mock logic to fetch a single product
    return await this.productRepository.getProductById(_id);
  }

  async getProductList(): Promise<Product[]> {
    // Mock logic to fetch a list of products
    return await this.productRepository.getList();
  }

  async save(product: Product): Promise<void> {
    // Mock logic to save a product
    const saved = await this.productRepository.save(product);
    this.client.emit('product_creation', [
      {
        key: 'Product',
        value: product,
      },
    ]);
    return saved;
  }

  async update(product: Product): Promise<void> {
    // Mock logic to update a product
    return await this.productRepository.update(product);
  }

  async delete(id: string): Promise<void> {
    // Mock logic to delete a product
    return await this.productRepository.delete(id);
  }
}
