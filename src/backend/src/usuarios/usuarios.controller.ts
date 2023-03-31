import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { IUsuarios } from 'src/interfaces/usuarios.interface';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: PrismaService) {}

  @Post('create')
  create(@Body() createUsuarioDto: IUsuarios) {
    return this.usuariosService.createusuarios(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuariosService.getusuarios();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: IUsuarios) {
    return this.usuariosService.updateusuarios(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.deleteusuarios(+id);
  }
}
