import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaService.name);

  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log('Base de données connectée');
    } catch (error) {
      this.logger.warn(
        'Impossible de se connecter à la base de données. ' +
          "L'application démarre quand même, mais les opérations DB échoueront.",
      );
    }
  }
}
