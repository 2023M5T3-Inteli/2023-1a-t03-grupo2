import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';

describe('UsuariosController', () => {
  let controller: UsuariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosController],
      providers: [UsuariosService],
    }).compile();

    controller = module.get<UsuariosController>(UsuariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});


@Controller('usuarios')
export class UserController {
  constructor(private readonly userService: PrismaService) {}
  @Get()
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
