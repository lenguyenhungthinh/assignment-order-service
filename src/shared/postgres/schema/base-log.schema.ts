import { EntitySchemaColumnOptions } from 'typeorm';

export const BaseLogSchema = {
  createdAt: {
    name: 'created_at',
    type: 'timestamp with time zone',
    createDate: true,
    nullable: false,
  } as EntitySchemaColumnOptions,
};
