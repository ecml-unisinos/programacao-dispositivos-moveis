import { Component } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage {
  formaPagamento: string;

  constructor() { }

  finalizarPedido() {
  
    // Implementar a lógica de envio do pedido via WhatsApp
    
    const pedido = `Olá, Pedido finalizado, forma de pagamento: ${this.formaPagamento}`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=5551981783535&text=${encodeURIComponent(pedido)}`;
    window.open(whatsappLink, '_system');
  }
}
