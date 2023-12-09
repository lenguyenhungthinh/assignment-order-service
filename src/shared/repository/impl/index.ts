import { Provider } from '@nestjs/common';
import { ProductRepositoryName } from 'src/shared/domain/repository/product.repository.interface';
import { ProductRepositoryImpl } from './product.repository';

export const Repositories: Provider[] = [
  {
    provide: ProductRepositoryName,
    useClass: ProductRepositoryImpl,
  },
];
