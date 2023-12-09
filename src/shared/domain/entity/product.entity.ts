import { IEntity } from '../model/seedwork';
import { BaseEntity } from './base.entity';

export class Product extends BaseEntity {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  largeImage?: string;
  discount?: number;
  discountAmount?: number;

  constructor(init?: Partial<Product>) {
    super();
    Object.assign(this, init);
  }

  equals(entity: IEntity): boolean {
    if (!(entity instanceof Product)) return false;
    return this.id === entity.id;
  }
}
