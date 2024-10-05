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
import { ToastController } from '@ionic/angular';

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
  constructor(private router: Router, private toastController: ToastController) {
    this.produtos = this.carrinhoService.getProdutosCarrinho();
  }
  carrinhoService = inject(CarrinhoService);

  valorTotal: number = 0;

  quantidadeTotal: number = 0;

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

  verificaQuantidadeProdutos(){
    for (const produto of this.produtos) {
      this.quantidadeTotal = this.quantidadeTotal + produto.quantidade;
    }
    if (this.quantidadeTotal > 0){
      this.chamarEndereco();
    }else{
      this.exibirToast('Não há produtos no carrinho!');
    }
  }

  async exibirToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });

    await toast.present();
  }

  }
