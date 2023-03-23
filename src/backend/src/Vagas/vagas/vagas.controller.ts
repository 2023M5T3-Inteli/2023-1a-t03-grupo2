import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateVagasDto } from './dto/create-vagas.dto';
import { UpdateVagasDto } from './dto/update-vagas.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Controller('vagas')
export class VagasController {
  constructor(private readonly vagasService: PrismaService) {}

  @Post('/create')
  create(@Body() createVagasDto: CreateVagasDto) {
    return this.vagasService.createVagas(createVagasDto);
  }

  @Get()
  findAll() {
    return this.vagasService.getVagas();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.vagasService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVagasDto: UpdateVagasDto) {
    return this.vagasService.updateVaga(+id, updateVagasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vagasService.deleteVaga(+id);
  }
}
