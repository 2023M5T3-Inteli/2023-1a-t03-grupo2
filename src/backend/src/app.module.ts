import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { ProjectsController } from './projetos/projeto.controller';
import { ProjectService } from './projetos/projeto/projeto.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, ProjectsController],
  providers: [AppService, PrismaService, ProjectService],
})
export class AppModule {}
