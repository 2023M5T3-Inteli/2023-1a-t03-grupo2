import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma/prisma.service';
import { ProjetoController } from './Projeto/projeto/projeto.controller';
import { SolicitacaoController } from './Solicitacao/solicitacao/solicitacao.controller';
import { UserController } from './User/user/user.controller';
import { VagasController } from './Vagas/vagas/vagas.controller';
import { UsuariosModule } from './usuarios/usuarios.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [PrismaModule, UsuariosModule],
  controllers: [AppController, UserController, SolicitacaoController, VagasController, ProjetoController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
