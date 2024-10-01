import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAlert, IonFooter, IonButton, IonGrid, IonCol, IonRow, IonIcon, IonLabel, IonItem, IonList, IonInput, IonModal, IonButtons, IonAvatar, IonImg } from '@ionic/angular/standalone';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonImg, IonAvatar, IonButtons, IonModal, IonInput, IonList, IonItem, IonLabel, IonIcon, IonRow, IonCol, IonGrid, IonButton, IonFooter, IonAlert, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, ],
})

export class HomePage implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  cadastroForm: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
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
      // Call your API or perform any other action with the form data
    } else {
      console.log('Por favor, informe os seus dados!');
    }
  }

  cadastrar(): void {
    if (this.cadastroForm.valid) {
      const cadastroData = this.cadastroForm.value;
      console.log(cadastroData);
      // Call your API or perform any other action with the form data
    } else {
      console.log('Por favor, informe os seus dados!');
    }
  }
}