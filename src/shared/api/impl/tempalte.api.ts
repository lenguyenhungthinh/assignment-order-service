import { Injectable, Logger } from '@nestjs/common';
import { TemplateApi } from '../../domain/api/template.api.interface';
import { Template } from '../../domain/entity';

@Injectable()
export class TemplateApiImpl implements TemplateApi {
  private readonly logger = new Logger(TemplateApiImpl.name);

  async send(template: Template): Promise<void> {
    this.logger.log('[External] Sending...' + JSON.stringify(template));
  }
}
