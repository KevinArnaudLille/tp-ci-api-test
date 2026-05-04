import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    const adapter = new PrismaBetterSqlite3({
      url: process.env.DATABASE_URL ?? 'file:./prisma/dev.db',
    });
    super({ adapter });
  }

  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log('Base de données connectée');
    } catch (error) {
      this.logger.warn(
        `Impossible de se connecter à la base de données: ${error}. ` +
          "L'application démarre quand même, mais les opérations DB échoueront.",
      );
    }
  }
}
