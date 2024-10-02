import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { HomePage } from './home/home.page';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadComponent: () => import('./tab-catalogo/tab1.page').then(m => m.Tab1Page)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadComponent: () => import('./tab-contato/tab2.page').then(m => m.Tab2Page)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadComponent: () => import('./tab-carrinho/tab3.page').then(m => m.Tab3Page)
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadComponent: () => import('./tab-perfil/tab4.page').then(m => m.Tab4Page)
          }
        ]
      },
      {
        path: 'endereco',
        loadComponent: () =>
          import('./endereco/endereco.page').then((m) => m.EnderecoPage),
      },
      {
        path: 'pagamento',
        loadComponent: () =>
          import('./pagamento/pagamento.page').then((m) => m.PagamentoPage),
      },
    ]
  }
];

@Component({
  selector: 'app-root',
  template: '<ion-router-outlet></ion-router-outlet>'
})
export class AppComponent {}

@NgModule({
  declarations: [AppComponent],
  imports: [
    IonicModule,
    RouterModule.forRoot(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}