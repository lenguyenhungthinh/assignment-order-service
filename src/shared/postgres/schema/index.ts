/* eslint-disable @typescript-eslint/ban-types */
import { EntitySchema } from 'typeorm';
import { ProductSchema } from './product.schema';

export const PostgreSchemas: (Function | EntitySchema)[] = [ProductSchema];
