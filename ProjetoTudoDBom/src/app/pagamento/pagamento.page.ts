import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
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
