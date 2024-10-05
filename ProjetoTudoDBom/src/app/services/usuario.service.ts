import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor() {}

  usuarios: {
    nome: string;
    cpf: number;
    email: string;
    telefone: number;
    senha: string;
    id: number;
  }[] = [];

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
