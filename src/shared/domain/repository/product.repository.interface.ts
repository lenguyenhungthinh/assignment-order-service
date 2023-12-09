import { Product } from '../entity/product.entity';

export const ProductRepositoryName = 'ProductRepository.Interface';

export interface ProductRepository {
  getList(): Promise<Product[]>;
  getProductById(id: string): Promise<Product | undefined>;
  save(product: Product): Promise<void>;
  update(product: Product): Promise<void>;
  delete(id: string): Promise<void>;
}
