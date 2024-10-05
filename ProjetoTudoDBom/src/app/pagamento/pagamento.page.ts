import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonTitle, IonToolbar, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
  standalone: true,
  imports: [
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

  constructor() {}

  carrinhoService = inject(CarrinhoService);

  finalizarPedido() {
    const pedido = this.carrinhoService.whatsappUrl + ` - Forma de pagamento: ${this.formaPagamento}`;

    window.open(pedido, '_blank');

    // const whatsappLink = `https://api.whatsapp.com/send?phone=5551981783535&text=${encodeURIComponent(pedido)}`;

    // window.open(whatsappLink, '_system');

    alert('Obrigado pela parceria, em breve seu pedido será entregue.');
  }
}