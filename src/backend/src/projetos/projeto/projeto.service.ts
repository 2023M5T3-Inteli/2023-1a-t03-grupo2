import { Injectable } from "@nestjs/common";
import { Projeto } from "./projeto";

@Injectable()
export class ProjectService {

    projetos: Projeto[] = [
        {name: 'Criptomoedas e Blockchain', duration: '3 semanas', id: 1, description: 'Projeto com o objetivo de inserir desconhecidos a tecnologias emergentes', technologies: 'Solidity', chiefEmail: 'arnaldo.gomes@dell.com'},
        {name: 'Algoritimos Complexos', duration: '4 semanas', id: 2, description: 'Projeto com o objetivo de mostrar o desenvolvimento de algoritimos de alta precisão', technologies: 'Java', chiefEmail: 'leandro.coelho@dell.com'},
        {name: 'Jogos Digitais', duration: '2 semanas', id: 3, description: 'É apaixonado pro jogos? Conheça um pouco do desenvolvimento que os constroi', technologies: 'Unity | C#', chiefEmail: 'jose.oliveira@dell.com'},
        {name: 'Backend e seu funcionamento', duration: '5 semanas', id: 4, description: 'Conheça todo o processo de desenvolvimento BackEnd', technologies: 'TypeScript', chiefEmail: 'roberto.amaral@dell.com'},
        
    ];


    getAll(){
        return this.projetos;
    }

    getById(id: number){
        const projeto = this.projetos.find((value) => value.id == id);
        return projeto;
    }

    create(projeto: Projeto){
        let lastProject = 0;
        if (this.projetos.length > 0) {
            lastProject = this.projetos[this.projetos.length - 1].id;
        }
        projeto.id = lastProject + 1;
        this.projetos.push(projeto);

        return projeto;
    }
    update(projeto: Projeto){
        const projetosArray = this.getById(projeto.id);
        if(projetosArray){
            projetosArray.description = projeto.description;
            projetosArray.duration = projeto.duration;
        }
        return projetosArray;
    }
    delete(id: number){
        const index = this.projetos.findIndex((value) => value.id == id);
        this.projetos.splice(index, 1);
        
    }
}