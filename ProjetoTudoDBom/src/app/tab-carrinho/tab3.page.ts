import { Component, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonCard,
  IonCardHeader,
  IonThumbnail,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonRow,
  IonCol,
  IonText,
  IonGrid,
  IonAvatar,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { CarrinhoService } from '../services/carrinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    IonAvatar,
    IonGrid,
    IonText,
    IonRow,
    IonItem,
    IonCardHeader,
    IonCard,
    IonHeader,
    IonToolbar,
    IonInput,
    IonTitle,
    IonContent,
    IonThumbnail,
    ExploreContainerComponent,
    IonButton,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    FormsModule,
    IonCol,
  ],
})
export class Tab3Page {
  constructor(private router: Router) {
    this.produtos = this.carrinhoService.getProdutosCarrinho();
  }
  carrinhoService = inject(CarrinhoService);

  valorTotal: number = 0

  produtos: { nome: string; quantidade: number; id: number; imagem: string, preco: number }[] = [];

  mais(produtoId: number) {
    const produto = this.carrinhoService.produtos.find(
      (produto) => produto.id == produtoId
    );
    if (produto) {
      produto.quantidade++;
    }
  }

  menos(produtoId: number) {
    const produto = this.carrinhoService.produtos.find(
        (produto) => produto.id == produtoId
      );
    if (produto) {
      if (produto.quantidade > 0) {
        produto.quantidade--;

        }
      }
    }

  chamarEndereco() {
    this.calcularValorFinal()
    this.router.navigate(['/tabs/endereco'])
  }
  
  calcularValorFinal() {
    for (const produto of this.produtos) {
      this.valorTotal = this.valorTotal + produto.preco * produto.quantidade;
      this.carrinhoService.setValorTotal(this.valorTotal)
    }
  }
  }
