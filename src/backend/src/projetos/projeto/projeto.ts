import { ApiProperty } from "@nestjs/swagger";

export class Projeto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    duration: string;
    @ApiProperty()
    id: number;
    @ApiProperty()
    description: string;
    @ApiProperty()
    technologies: string;
    @ApiProperty()
    chiefEmail: string;
}
