import { Inject } from '@nestjs/common';
import { Product } from 'src/shared/domain/entity/product.entity';
import { ProductRepository, ProductRepositoryName } from 'src/shared/domain/repository/product.repository.interface';

export class ProductService {
  constructor(
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
    return await this.productRepository.save(product);
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
