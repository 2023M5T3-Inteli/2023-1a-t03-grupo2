import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { IProjeto } from 'src/interfaces/projeto.interface';
import { ISolicitacao } from 'src/interfaces/solicitacao.interface';
import { IUser } from 'src/interfaces/user.interface';
import { IUsuarios } from 'src/interfaces/usuarios.interface';
import { IVagas } from 'src/interfaces/vagas.interface';

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

  async createUser(userData: IUser): Promise<IUser> {
  try{const newUser = await this.prisma.user.create({
    data: {
      nome: userData.nome,
      habilidades: userData.habilidades,
      areaAtuacao: userData.areaAtuacao
    }
  })
  return newUser
}catch(err){
  console.log(err)
}
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
  const solicitacao = await this.prisma.estadodesolicitacao.findMany()
  return solicitacao
}

  async createSolicitacao(solicitacaoData: ISolicitacao): Promise<ISolicitacao>{
  const newSolicitacao = await this.prisma.estadodesolicitacao.create({
    data: {
      emailGestor: solicitacaoData.emailGestor
    }
  })
  return newSolicitacao
}
  async updateSolicitacao(id, solicitacaoData){
  const updatedSolicitacao = await this.prisma.estadodesolicitacao.update({
    where: { id },
    data: solicitacaoData
  })
  return updatedSolicitacao
}
  async deleteSolicitacao(id){
  const deletedSolicitacao = await this.prisma.estadodesolicitacao.delete({
    where: { id }
  })
  return deletedSolicitacao
}


  async getVagas(){
  const vagas = await this.prisma.vagas.findMany()
  return vagas
}

  async createVagas(vagaData: IVagas): Promise<IVagas>{
  const newVaga = await this.prisma.vagas.create({
    data: {
      tipoVaga: vagaData.tipoVaga,
      descricao: vagaData.descricao
    }
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
async getusuarios(){
  const usuarios = await this.prisma.usuarios.findMany()
  return usuarios
}
async createusuarios(usuariosData: IUsuarios): Promise<IUsuarios>{
  const newusuarios = await this.prisma.usuarios.create({
    data: {
      nome: usuariosData.nome,
      email: usuariosData.email,
      phone: usuariosData.phone,
      data_nascimento: usuariosData.data_nascimento
    }
  })
  return newusuarios
}
  async updateusuarios(id, usuariosData){
  const updatedusuarios = await this.prisma.usuarios.update({
    where: { id },
    data: usuariosData
  })
  return updatedusuarios
}
  async deleteusuarios(id){
  const deletedusuarios = await this.prisma.usuarios.delete({
    where: { id }
  })
  return deletedusuarios
}

  async onModuleDestroy() {
  await this.prisma.$disconnect();
}


}