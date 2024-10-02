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
  constructor() {
    this.produtos = this.carrinhoService.getProdutosCarrinho();
  }
  carrinhoService = inject(CarrinhoService);

  produtos: { nome: string; quantidade: number; id: number }[] = [];

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
  }
