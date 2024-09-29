import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
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
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
