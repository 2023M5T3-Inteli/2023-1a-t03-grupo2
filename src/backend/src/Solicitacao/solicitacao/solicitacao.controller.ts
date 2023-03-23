import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { ISolicitacao } from 'src/interfaces/solicitacao.interface';

@Controller('solicitacao')
export class SolicitacaoController {
  constructor(private readonly solicitacaoService: PrismaService) {}

  @Post('criar')
  async create(@Body() createSolicitacaoDto: ISolicitacao) {
    return this.solicitacaoService.createSolicitacao(createSolicitacaoDto);
  }

  @Get()
  findAll() {
    return this.solicitacaoService.getSolicitacao();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.solicitacaoService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSolicitacaoDto: UpdateSolicitacaoDto) {
    return this.solicitacaoService.updateSolicitacao(+id, updateSolicitacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitacaoService.deleteSolicitacao(+id);
  }
}
