import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { IUser } from 'src/interfaces/user.interface';
import { IUsuarios } from 'src/interfaces/usuarios.interface';

@Controller('usuarios')
export class UserController {
  constructor(private readonly userService: PrismaService) {}
  @Get('usuarios')
  findAll() {
    return this.userService.getusuarios();
  }
  @Post('create')
  create(@Body() createUserDto: IUsuarios) {
    return this.userService.createusuarios(createUserDto);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateusuarios(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.deleteusuarios(+id);
  }

}
