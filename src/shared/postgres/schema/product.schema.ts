import { Product } from 'src/shared/domain/entity/product.entity';
import { EntitySchema } from 'typeorm';
import { BaseSchema } from './base.schema';

export const ProductSchema = new EntitySchema<Product>({
  name: 'Product',
  tableName: 'product',
  target: Product,
  columns: {
    ...BaseSchema,
    id: {
      type: String,
      length: 36,
      primary: true,
      name: 'id',
    },
    name: {
      type: String,
      length: 50,
      nullable: false,
      name: 'name',
    },
    price: {
      type: 'decimal',
      nullable: false,
      name: 'price',
      default: 0,
    },
    discount: {
      type: 'decimal',
      nullable: true,
      default: 0,
    },
    discountAmount: {
      type: 'decimal',
      nullable: true,
      default: 0,
    },
  },
  orderBy: {
    createdAt: 'ASC',
  },
});
