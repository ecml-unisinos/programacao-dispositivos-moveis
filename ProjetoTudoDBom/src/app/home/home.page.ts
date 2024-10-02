import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAlert, IonFooter, IonButton, IonGrid, IonCol, IonRow, IonIcon, IonLabel, IonItem, IonList, IonInput, IonModal, IonButtons, IonAvatar, IonImg } from '@ionic/angular/standalone';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonImg, IonAvatar, IonButtons, IonModal, IonInput, IonList, IonItem, IonLabel, IonIcon, IonRow, IonCol, IonGrid, IonButton, IonFooter, IonAlert, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, ],
})

export class HomePage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;
  email: string='jessica@gmail.com';
  senha: string='teste123';
  loginForm: FormGroup = new FormGroup({});
  cadastroForm: FormGroup = new FormGroup({});


  constructor(private router: Router, private toastController: ToastController) { }

  ngOnInit(): void {
    //setTimeout(() => {
    //  this.router.navigate(['/tabs/tab1']);
    //}, 2000);

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', Validators.required)
    });

    this.cadastroForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      cpfCnpj: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefone: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
      confirmarSenha: new FormControl('', Validators.required)
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      console.log(loginData);
      if (this.loginForm.value.email===this.email){
        if (this.loginForm.value.senha===this.senha){
          setTimeout(() => {
            this.modal.dismiss(this.router.navigate(['/tabs/tab1']));
          }, 500);
        }else{
          console.log('Senha inválida!');
          this.exibirToast('Senha inválida');
        }
      }else{
        console.log('E-mail não encontrado!');
        this.exibirToast('E-mail não encontrado!');
      }
      // Call your API or perform any other action with the form data
    } else {
      console.log('Por favor preencha os dados!');
    }
  }

  cadastrar(): void {
    if (this.cadastroForm.valid) {
      const cadastroData = this.cadastroForm.value;
      console.log(cadastroData);
      this.modal.dismiss(this.router.navigate(['/tabs/tab1']));
      // Call your API or perform any other action with the form data
    } else {
      console.log('Por favor, informe os seus dados!');
    }
  }

  async exibirToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });

    await toast.present();
  }

}