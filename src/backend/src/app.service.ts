import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {

  getReconhecimento(): string {
    return "endpoint reconhecimento";
  }

  getProjetos(): string {
    return "endpoint projetos";
  }

  getDetails(): string {
    return "endpoint detalhes";
  }

  getParticipantes(): string {
    return "endpoint participantes";
  }
}
