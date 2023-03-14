import { Test } from '@nestjs/testing';
import { ProjectsController } from './projeto.controller';
import { Projeto } from './projeto/projeto';
import { ProjectService } from './projeto/projeto.service';

describe('CatsController', () => {
  let projetoController: ProjectsController;
  let projetoService: ProjectService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [ProjectsController],
        providers: [ProjectService],
      }).compile();

    projetoService = moduleRef.get<ProjectService>(ProjectService);
    projetoController = moduleRef.get<ProjectsController>(ProjectsController);
  });

  describe('getAll', () => {
    it('should return an array of cats', async () => {
        const result: Projeto[] = [
            {name: 'Criptomoedas e Blockchain', duration: '3 semanas', id: 1, description: 'Projeto com o objetivo de inserir desconhecidos a tecnologias emergentes', technologies: 'Solidity', chiefEmail: 'arnaldo.gomes@dell.com'},
            {name: 'Algoritimos Complexos', duration: '4 semanas', id: 2, description: 'Projeto com o objetivo de mostrar o desenvolvimento de algoritimos de alta precisão', technologies: 'Java', chiefEmail: 'leandro.coelho@dell.com'},
            {name: 'Jogos Digitais', duration: '2 semanas', id: 3, description: 'É apaixonado pro jogos? Conheça um pouco do desenvolvimento que os constroi', technologies: 'Unity | C#', chiefEmail: 'jose.oliveira@dell.com'},
            {name: 'Backend e seu funcionamento', duration: '5 semanas', id: 4, description: 'Conheça todo o processo de desenvolvimento BackEnd', technologies: 'TypeScript', chiefEmail: 'roberto.amaral@dell.com'},
          ];
      jest.spyOn(projetoService, 'getAll').mockImplementation(() => result);

      expect(await projetoController.getAll()).toBe(result);
    });
  });
});