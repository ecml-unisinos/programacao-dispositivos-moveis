import { Routes } from '@angular/router';
import { HomePage } from './home.page';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab-catalogo/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab-contato/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab-carrinho/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'pagamento',
        loadComponent: () =>
          import('../pagamento/pagamento.page').then((m) => m.PagamentoPage),
      },
      {
        path: 'tab4',
        loadComponent: () =>
          import('../tab-perfil/tab4.page').then((m) => m.Tab4Page),
      },
      {
        path: 'endereco',
        loadComponent: () =>
          import('../endereco/endereco.page').then((m) => m.EnderecoPage),
      },
      {
        path: '',
        redirectTo: 'home/home.page',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home/home.page',
    pathMatch: 'full',
  },
];
