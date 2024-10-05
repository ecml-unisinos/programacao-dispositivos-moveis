import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  constructor() { }
  
  valorTotal: number = 0

  whatsappUrl: string = ''

  produtos: {
    nome: string;
    quantidade: number;
    id: number;
    imagem: string;
    preco: number;
  }[] = [
    {
      nome: 'Pão de Queijo Tradicional 75g',
      quantidade: 0,
      id: 1,
      imagem: '../../assets/images/produtos/produto 1.jpeg',
      preco: 5,
    },
    {
      nome: 'Pão de Queijo com gotas de chocolate 75g',
      quantidade: 0,
      id: 2,
      imagem: '../../assets/images/produtos/produto 2.jpeg',
      preco: 6,
    },
    {
      nome: 'Chipa',
      quantidade: 0,
      id: 3,
      imagem: '../../assets/images/produtos/produto 3.jpeg',
      preco: 4,
    },
    {
      nome: 'Palitos de provolone',
      quantidade: 0,
      id: 4,
      imagem: '../../assets/images/produtos/produto 4.jpeg',
      preco: 3,
    },
  ];

  getProdutosCarrinho(): {
    nome: string;
    quantidade: number;
    id: number;
    imagem: string;
    preco: number;
  }[] {
    return this.produtos.filter(produto => produto.quantidade > 0);
  }

  atualizaProdutoCarrinho(quantidade: number, produtoId: number) {
    const produto = this.produtos.find((produto) => produto.id == produtoId);
    if (produto) {
      produto.quantidade = quantidade;
    }
  }

  getValorTotal(): number {
    return this.valorTotal
  }

  setValorTotal(valor: number) {
    this.valorTotal = valor
  }
}
