import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  IonCol,
  IonRow,
  IonGrid,
  IonCard,
  IonCardContent,
} from '@ionic/angular/standalone';
import { CarrinhoService } from '../services/carrinho.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
  standalone: true,
  imports: [
    IonCardContent,
    IonCard,
    IonGrid,
    IonRow,
    IonCol,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonLabel,
    IonItem,
    IonList,
    IonContent,
    IonButton,
    IonSelect,
    IonSelectOption,
    FormsModule,
  ],
})
export class PagamentoPage {
  formaPagamento: string = '';

  constructor(private toastController: ToastController) {}

  carrinhoService = inject(CarrinhoService);

  finalizarPedido() {
    const pedido =
      this.carrinhoService.whatsappUrl +
      `%0a- Forma de pagamento: ${this.formaPagamento}`;
    this.exibirToast(
      'Obrigado pela parceria, em breve seu pedido será entregue.'
    );
    window.open(pedido, '_blank');

    // const whatsappLink = `https://api.whatsapp.com/send?phone=5551981783535&text=${encodeURIComponent(pedido)}`;
    // window.open(whatsappLink, '_system');
  }

  //inicializa as configuracoes toast e aguarda ele ser chamado para exibir
  async exibirToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
    });

    await toast.present();
  }
}
