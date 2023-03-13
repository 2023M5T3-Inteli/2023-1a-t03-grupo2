import { Controller, Get, Post, Param, Body, Put, Delete } from "@nestjs/common";
import { Projeto } from "./projeto/projeto";
import { ProjectService } from "./projeto/projeto.service";
import swaggerUi from "swagger-ui-express";
import { ApiTags } from "@nestjs/swagger/dist";

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup)

@ApiTags('Projetos')
@Controller('projetoss')
export class ProjectsController{
    constructor(private projectService: ProjectService){

    }
    @Get()
        async getAll() : Promise<Projeto[]>{
            return this.projectService.getAll();
    }

    @Get(':id')
        async getById(@Param('id') id: number) : Promise<Projeto>{
            return this.projectService.getById(id);
    }
    @Post()
        async create(@Body() project: Projeto) : Promise<Projeto>{
            return this.projectService.create(project);
    }
    @Put(':id')
    async update(@Param('id') id: number, @Body() project: Projeto): Promise<Projeto>{
        project.id = id;
        return this.projectService.update(project);
    }

    @Delete(':id')
    async delete(@Param('id') id: number){
        this.projectService.delete(id);
    }

}