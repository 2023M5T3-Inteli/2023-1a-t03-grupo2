import { ApiProperty } from "@nestjs/swagger";
export class CreateUserDto {
    @ApiProperty()
    areaAtuacao: string;
    @ApiProperty()
    habilidades: string;
    @ApiProperty()
    idFuncionario: number;
    @ApiProperty()
    nome: string;
}
    

    
