import { Template } from '../entity/template.entity';

export const TemplateApiName = 'TemplateApi.Interface';

export interface TemplateApi {
  send(template: Template): Promise<void>;
}
