/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, Logger, OnApplicationShutdown, OnModuleInit } from '@nestjs/common';
import { Environment } from 'src/utils/config/env.validation';
import { DataSource } from 'typeorm';

@Injectable()
export class DataSourceLogger implements OnModuleInit, OnApplicationShutdown {
  private internalTimer: NodeJS.Timeout;
  private odsTimer: NodeJS.Timer;

  constructor(private readonly datasource: DataSource) {}

  onModuleInit() {
    if (process.env['NODE_ENV'] !== Environment.Local) {
      const internalLogger = new Logger('PG-INTERNAL');
      this.internalTimer = setInterval(() => {
        const pool = (this.datasource.driver as any).master;
        internalLogger.log(
          `DB Pool Statistics [Max: ${pool.options.max}, Current: ${pool._clients.length}, Busy: ${pool._clients.length - pool._idle.length}, Idle: ${
            pool._idle.length
          }, Tasks: ${pool._pendingQueue.length}]`,
        );
      }, 30000);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onApplicationShutdown(_?: string) {
    if (this.internalTimer) {
      clearInterval(this.internalTimer);
    }

    if (this.odsTimer) {
      clearInterval(this.internalTimer);
    }
  }
}
