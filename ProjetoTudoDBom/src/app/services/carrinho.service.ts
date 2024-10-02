import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor() { }

  produto = 'Pão de Queijo Tradicional 75g' // atualizar
  quantidade = 0
}
