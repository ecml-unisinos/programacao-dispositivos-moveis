import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor() {}

  usuarios: { nome: string; cpf: number; email: string; telefone: number; senha: string; id: number }[] = [
    { nome: 'Jéssica', cpf: 54642927460, email: 'jessica@gmail.com', telefone: 51993258741, senha: 'teste123', id: 1},
  ];

  getUsuariosCadastrados(): {
    nome: string;
    cpf: number;
    email: string;
    telefone: number;
    senha: string;
    id: number;
  }[] {
    return this.usuarios;
  }

  getUsuario(id: number): {
    nome: string;
    cpf: number;
    email: string;
    telefone: number;
    senha: string;
    id: number;
  } {
    const usuario = this.usuarios.find((usuario) => (usuario.id = id))!;
    return usuario;
  }

  cadastrarUsuario(novoUsuario: {
    nome: string;
    cpf: number;
    email: string;
    telefone: number;
    senha: string;
    id: number;
  }) {
    this.usuarios.push(novoUsuario);
  }
}
