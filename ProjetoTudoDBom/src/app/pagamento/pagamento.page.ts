import { Component } from '@angular/core';
//import { NgModel } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonSelect, IonSelectOption],
})
export class PagamentoPage {
  formaPagamento: string = '';

  constructor() { }

  finalizarPedido() {
    const pedido = `Olá, Pedido finalizado, forma de pagamento: ${this.formaPagamento}`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=5551981783535&text=${encodeURIComponent(pedido)}`;
    window.open(whatsappLink, '_system');
  }
}
