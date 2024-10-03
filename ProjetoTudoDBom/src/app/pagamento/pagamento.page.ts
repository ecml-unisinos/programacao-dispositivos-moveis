import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonTitle, IonToolbar, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, 
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

  constructor() { }

  finalizarPedido() {
    const pedido = `Pedido finalizado. Forma de pagamento: ${this.formaPagamento}`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=5551981783535&text=${encodeURIComponent(pedido)}`;
    window.open(whatsappLink, '_system');
    alert('Obrigado pela parceira, em breve seu pedido será entregue.');
  }
}