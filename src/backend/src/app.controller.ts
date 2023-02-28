import { Controller, Get, Post } from '@nestjs/common';
import { ApplyProject } from 'classes/userInfo';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }


  @Get('reconhecimento')
  getReconhecimento(): string {
    return this.appService.getReconhecimento();
  }

  @Get('projetos')
  getProjetos(): string {
    return this.appService.getProjetos();
  }

  @Get('projetos/detalhes')
  getDetails(): string {
    return this.appService.getDetails();
  }

  @Get('projetos/participantes')
  getParticipantes(): string {
    return this.appService.getParticipantes();
  }

  @Get('download')
  getDownload(): string {
    return "download page";
  }

  // @Post('projetos/candidatar')
  // create(applyToProjecto: ApplyProject) {
  //   return 'new candidato';
  // }

  // @Post('projetos/criar')
  // create() {
  //   return 'new projeto';
  // }

  @Post('post')
  create() {
    return "Post realizado";
  }
  @Get('post')
  getPost(): string{
    return "post";
  }
}
