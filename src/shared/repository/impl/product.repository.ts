import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { Product } from 'src/shared/domain/entity/product.entity';
import { ProductRepository } from 'src/shared/domain/repository/product.repository.interface';
import { Repository } from 'typeorm';

export class ProductRepositoryImpl implements ProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}

  async getList(): Promise<Product[]> {
    return await this.repository.find();
  }

  async getProductById(id: string): Promise<Product | undefined> {
    return await this.repository.findOne({
      where: {
        id: id,
      },
    });
  }

  async save(product: Product): Promise<void> {
    product.id = randomUUID();
    await this.repository.save(product);
  }

  async update(product: Product): Promise<void> {
    await this.repository.update(product.id, product);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export default ProductRepository;
