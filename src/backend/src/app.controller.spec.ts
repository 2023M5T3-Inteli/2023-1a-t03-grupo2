import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "endpoint reconhecimento"', () => {
      expect(appController.getReconhecimento()).toBe('endpoint reconhecimento');
    });

    it('should return "endpoint projetos"', () => {
      expect(appController.getProjetos()).toBe('endpoint projetos');
    });

    it('should return "endpoint detalhes"', () => {
      expect(appController.getDetails()).toBe('endpoint detalhes');
    });

    it('should return "endpoint participantes"', () => {
      expect(appController.getParticipantes()).toBe('endpoint participantes');
    });
  });
});
