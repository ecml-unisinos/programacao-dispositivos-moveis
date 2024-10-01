import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonIcon, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page {

  constructor() {}

  WhatsApp(){
    const menssagem = 'Olá, vim pelo APP e gostaria de umas informações';
    const whatsappLink = `https://api.whatsapp.com/send?phone=5551981783535&text=${encodeURIComponent(menssagem)}`;
    window.open(whatsappLink, '_system');
  }
}
