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
      type: Number,
      nullable: false,
      name: 'price',
      default: 0,
    },
    description: {
      type: String,
      length: 255,
      nullable: true,
      name: 'description',
    },
    image: {
      type: String,
      length: 255,
      nullable: true,
    },
    largeImage: {
      type: String,
      length: 255,
      nullable: true,
    },
    discount: {
      type: Number,
      nullable: true,
      default: 0,
    },
    discountAmount: {
      type: Number,
      nullable: true,
      default: 0,
    },
  },
  orderBy: {
    createdAt: 'ASC',
  },
});
