import { IEntity } from '../model/seedwork/entity.interface';
import { BaseEntity } from './base.entity';

export class Template extends BaseEntity {
  id?: string;

  title: string;

  constructor(init?: Partial<Template>) {
    super();
    Object.assign(this, init);
  }

  equals(entity: IEntity): boolean {
    if (!(entity instanceof Template)) return false;
    return this.id === entity.id;
  }
}
