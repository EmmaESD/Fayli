import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// @Global : PrismaService devient injectable partout sans réimporter le module.
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
