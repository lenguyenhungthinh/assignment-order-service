import { Provider } from '@nestjs/common';
import { TemplateApiName } from 'src/shared/domain/api/template.api.interface';
import { TemplateApiImpl } from './tempalte.api';

export const Apis: Provider[] = [
  {
    provide: TemplateApiName,
    useClass: TemplateApiImpl,
  },
];
