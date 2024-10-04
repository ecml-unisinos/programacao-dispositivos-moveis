import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton, IonCol, IonGrid, IonRow, IonItem, IonLabel, IonInput, IonIcon, IonTabButton, IonTabBar, IonFooter } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-endereco',
  templateUrl: 'endereco.page.html',
  styleUrls: ['endereco.page.scss'],
  standalone: true,
  imports: [IonFooter, IonTabBar, IonTabButton, IonIcon, IonInput, IonLabel, IonItem, IonRow, IonGrid, IonCol, 
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    ExploreContainerComponent,
  ],
})
export class EnderecoPage {

  salvarEndereco() {
    alert('Endereço salvo com sucesso');
  }

  constructor(private router: Router) {}

  chamarPagamento(){
    this.router.navigate(['/tabs/pagamento'])
  }
}
