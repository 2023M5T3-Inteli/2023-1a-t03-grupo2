import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Controller('projeto')
export class ProjetoController {
  constructor(private readonly projetoService: PrismaService) {}

  @Post()
  create(@Body() createProjetoDto: CreateProjetoDto) {
    return this.projetoService.createProjeto(createProjetoDto);
  }

  @Get()
  findAll() {
    return this.projetoService.getProjetos();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.projetoService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjetoDto: UpdateProjetoDto) {
    return this.projetoService.updateProjeto(+id, updateProjetoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projetoService.deleteProjeto(+id);
  }
}
