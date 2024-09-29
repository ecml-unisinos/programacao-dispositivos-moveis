import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  AlertController
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-pagamento',
  templateUrl: 'pagamento.page.html',
  styleUrls: ['pagamento.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    ExploreContainerComponent,
  ],
})
export class PagamentoPage {
  constructor(private AlertController: AlertController) {}

  async simulatePayment() {
    const alert = await this.AlertController.create({
      header: 'Compra Realizada',
      message: 'Sua compra foi realizada com sucesso. Um pedido foi criado.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
