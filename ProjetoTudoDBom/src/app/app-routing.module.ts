import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagamentoPage } from './pagamento/pagamento.page';

const routes: Routes = [
  {
    path: 'pagamento',
    component: PagamentoPage
  },
  // Outras rotas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }