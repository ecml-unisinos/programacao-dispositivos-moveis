import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class UsuarioService {
  constructor() {}

  usuarios: { nome: string; cpf: number; email: string; telefone: number; senha: string; id: number }[] = [
    { nome: 'Jéssica', cpf: 54642927460, email: 'jessica@gmail.com', telefone: 51993258741, senha: 'teste123', id: 1},
    { nome: 'Juliana Salazar', cpf: 25346187521, email: 'juju@gmail.com', telefone: 51992587458, senha: 'teste546', id: 2},
  ];

  getUsuariosCadastrados(): { nome: string; cpf: number; email: string; telefone: number; senha: string; id: number }[] {
    return this.usuarios;
  }

  cadastrarUsuario(novoUsuario: { nome: string; cpf: number; email: string; telefone: number; senha: string; id: number }) {
    this.usuarios.push(novoUsuario);
  }

}
