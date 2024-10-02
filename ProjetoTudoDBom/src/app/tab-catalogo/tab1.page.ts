import { Component, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCard,
  IonCardContent,
  IonButton,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonCardContent,
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
  ],
})
export class Tab1Page {
  constructor() {
    this.produtos = this.carrinhoService.getProdutosCarrinho();
  }

  carrinhoService = inject(CarrinhoService);

  // quantidade1 = 0;
  // quantidade2 = 0;
  // quantidade3 = 0;
  // quantidade4 = 0;

  produtos: { nome: string; quantidade: number; id: number }[] = [];

  increment(produtoId: number) {
    const produto = this.produtos.find((produto) => produto.id == produtoId);
    if (produto) {
      produto.quantidade++;
      this.carrinhoService.atualizaProdutoCarrinho(
        produto.quantidade,
        produtoId
      );
    }
  }

  decrement(produtoId: number): void {
    const produto = this.produtos.find((produto) => produto.id == produtoId);
    if (produto) {
      if (produto.quantidade > 0) {
        produto.quantidade--;
        this.carrinhoService.atualizaProdutoCarrinho(produto.quantidade, produtoId);
      }
      
    }
  }

  getQuantidadeProduto(produtoId: number): number {
    const produto = this.produtos.find((produto) => produto.id == produtoId);
    if (produto) {
      return produto?.quantidade;
    } else {
      return 0;
    }
  }
}
