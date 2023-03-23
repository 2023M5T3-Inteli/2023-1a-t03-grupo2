import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { IProjeto } from 'src/interfaces/projeto.interface';

@Injectable()
export class PrismaService {
  public readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getProjetos() {
    const projetos = await this.prisma.projeto.findMany()
    return projetos
  }


  async createProjeto(data: IProjeto): Promise<IProjeto> {
    console.log(data)
    try{
    const newProjeto = await this.prisma.projeto.create({
        data: {
          duracao: data.duracao,
          descricao: data.descricao,
          emailGestor: data.emailGestor,
          nome: data.nome
        }
      })
    return newProjeto
  } catch(err) {
    console.log(err);
  }
}

  async updateProjeto(id, projetoData){
  const updatedProjeto = await this.prisma.projeto.update({
    where: { id },
    data: projetoData
  })
  return updatedProjeto
}
  async deleteProjeto(id){
  const deletedProjeto = await this.prisma.projeto.delete({
    where: { id }
  })
  return deletedProjeto
}


  async getUsers() {
  const users = await this.prisma.user.findMany()
  return users
}

  async createUser(userData) {
  const newUser = await this.prisma.user.create({
    data: userData
  })
  return newUser
}
  async updateUser(idFuncionario, userData) {
  const updatedUser = await this.prisma.user.update({
    where: { idFuncionario },
    data: userData
  })
  return updatedUser
}
  async deleteUser(idFuncionario) {
  const deletedUser = await this.prisma.user.delete({
    where: { idFuncionario }
  })
  return deletedUser
}

  async getSolicitacao(){
  const solicitacao = await this.prisma.solicitationState.findMany()
  return solicitacao
}

  async createSolicitacao(solicitacaoData){
  const newSolicitacao = await this.prisma.solicitationState.create({
    data: solicitacaoData
  })
  return newSolicitacao
}
  async updateSolicitacao(id, solicitacaoData){
  const updatedSolicitacao = await this.prisma.solicitationState.update({
    where: { id },
    data: solicitacaoData
  })
  return updatedSolicitacao
}
  async deleteSolicitacao(id){
  const deletedSolicitacao = await this.prisma.solicitationState.delete({
    where: { id }
  })
  return deletedSolicitacao
}


  async getVagas(){
  const vagas = await this.prisma.vagas.findMany()
  return vagas
}

  async createVagas(vagaData){
  const newVaga = await this.prisma.vagas.create({
    data: vagaData
  })
  return newVaga
}
  async updateVaga(id, vagaData){
  const updatedVaga = await this.prisma.vagas.update({
    where: { id },
    data: vagaData
  })
  return updatedVaga
}
  async deleteVaga(id){
  const deletedVaga = await this.prisma.vagas.delete({
    where: { id }
  })
  return deletedVaga
}

  async onModuleDestroy() {
  await this.prisma.$disconnect();
}
}