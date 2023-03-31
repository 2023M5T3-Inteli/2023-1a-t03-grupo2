import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma/prisma.service';
import { ProjetoController } from './Projeto/projeto/projeto.controller';
import { SolicitacaoController } from './Solicitacao/solicitacao/solicitacao.controller';
import { UserController } from './User/user/user.controller';
import { UsuariosController } from './usuarios/usuarios.controller';
import { VagasController } from './Vagas/vagas/vagas.controller';
@Module({
  imports: [PrismaModule],
  controllers: [AppController, UserController, SolicitacaoController, VagasController, ProjetoController, UsuariosController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
