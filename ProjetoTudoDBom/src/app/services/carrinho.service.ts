import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  constructor() {}

  produtos: { nome: string; quantidade: number; id: number; imagem: string }[] =
    [
      {
        nome: 'Pão de Queijo Tradicional 75g',
        quantidade: 0,
        id: 1,
        imagem: '../../assets/images/produtos/produto 1.jpeg',
      },
      {
        nome: 'Pão de Queijo com gotas de chocolate 75g',
        quantidade: 0,
        id: 2,
        imagem: '../../assets/images/produtos/produto 2.jpeg',
      },
      {
        nome: 'Chipa',
        quantidade: 0,
        id: 3,
        imagem: '../../assets/images/produtos/produto 3.jpeg',
      },
      {
        nome: 'Palitos de provolone',
        quantidade: 0,
        id: 4,
        imagem: '../../assets/images/produtos/produto 4.jpeg',
      },
    ];

  getProdutosCarrinho(): { nome: string; quantidade: number; id: number; imagem: string }[] {
    // const produtos = [
    //   { nome: 'Pão de Queijo Tradicional 75g', quantidade: 2},
    //   { nome: 'Pão de Queijo 75g', quantidade: 3 },
    // ];
    return this.produtos;
  }

  atualizaProdutoCarrinho(quantidade: number, produtoId: number) {
    const produto = this.produtos.find((produto) => produto.id == produtoId);
    if (produto) {
      produto.quantidade = quantidade;
    }
  }
}
