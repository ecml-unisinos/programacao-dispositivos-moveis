import { Component, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton, IonCol, IonGrid, IonRow, IonItem, IonLabel, IonInput, IonIcon, IonTabButton, IonTabBar, IonFooter, IonText } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; 
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-endereco',
  templateUrl: 'endereco.page.html',
  styleUrls: ['endereco.page.scss'],
  standalone: true,
  imports: [IonText, 
    IonFooter,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonInput,
    IonLabel,
    IonItem,
    IonRow,
    IonGrid,
    IonCol, 
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    ExploreContainerComponent,
    ReactiveFormsModule 
  ],
})
export class EnderecoPage {

  form: FormGroup; 

  constructor(private router: Router, private fb: FormBuilder) { 
    
    this.form = this.fb.group({
      endereco: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      cep: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
    });
  }

  carrinhoService = inject(CarrinhoService);

  chamarPagamento() {
    if (this.form.valid) {
      const endereco = this.form.value.endereco;
      const numero = this.form.value.numero;
      const complemento = this.form.value.complemento ? this.form.value.complemento : 'Não informado';
      const cep = this.form.value.cep;
      const bairro = this.form.value.bairro;
      const cidade = this.form.value.cidade;
      const listaProdutos = this.listaProdutos()
      const valorTotal = this.carrinhoService.getValorTotal()
      let mensagem = `Finalização de Compra:
      - Endereço: ${endereco}, Nº: ${numero}
      - Complemento: ${complemento}
      - CEP: ${cep}
      - Bairro: ${bairro}
      - Cidade: ${cidade}`;

      mensagem = mensagem + listaProdutos + `- Valor total: R$${valorTotal}.00 `

      const whatsappUrl = `https://wa.me/5551981783535?text=${encodeURIComponent(mensagem)}`;
    
      window.open(whatsappUrl, '_blank');
    } else {
      console.log('Formulário inválido');
    }
  }

  listaProdutos() {
    const produtos = this.carrinhoService.getProdutosCarrinho();
    let mensagem = ' - Produtos:';
    for (const produto of produtos) {
      mensagem = mensagem + ` - ${produto.quantidade} ${produto.nome} `;
    }
    return mensagem
  }
}
