import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAlert, IonFooter, IonButton, IonGrid, IonCol, IonRow, IonIcon, IonLabel, IonItem, IonList, IonInput, IonModal, IonButtons, IonAvatar, IonImg } from '@ionic/angular/standalone';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonImg, IonAvatar, IonButtons, IonModal, IonInput, IonList, IonItem, IonLabel, IonIcon, IonRow, IonCol, IonGrid, IonButton, IonFooter, IonAlert, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, ],
})

export class HomePage implements OnInit {

  @ViewChild('loginModal') loginModal!: IonModal;
  @ViewChild('cadastroModal') cadastroModal!: IonModal;
  loginForm: FormGroup = new FormGroup({});
  cadastroForm: FormGroup = new FormGroup({});

  constructor(private router: Router, private toastController: ToastController, private authService: AuthService, private usuarioService: UsuarioService) { }

  ngOnInit(): void {

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

  //verifica se os dois campos de senha estão iguais
  validarSenha(){
    const dadosCadastro = this.cadastroForm.value;
    const senhasForm = {
      senha: dadosCadastro.senha,
      confirmarSenha: dadosCadastro.confirmarSenha
    };

    if(senhasForm.senha === senhasForm.confirmarSenha){
      this.cadastrar();
    }else{
      this.exibirToast('As senhas não conferem');
      this.cadastroForm.get('senha')?.setValue('');
      this.cadastroForm.get('confirmarSenha')?.setValue('');
    }
  }

  //autenticacao do usuário
  login(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      const usuarios = this.usuarioService.getUsuariosCadastrados();
      const user = usuarios.find(u => u.email.toLowerCase() === loginData.email.toLowerCase() && u.senha === loginData.senha);
      if (user) {
        this.authService.login(user.id);
        setTimeout(() => {
          this.loginModal.dismiss(this.router.navigate(['/tabs/tab1']));
        }, 200);
      } else {
        this.exibirToast('E-mail ou senha inválidos!');
      }
    } else {
      this.exibirToast('Por favor preencha os dados!');
    }
  }

  
  //cadastro do usuario com os dados do formulario
  cadastrar(): void {
    if (this.cadastroForm.valid) {
      const cadastroData = this.cadastroForm.value;
      const novoUsuario = {
        nome: cadastroData.nome,
        cpf: cadastroData.cpfCnpj,
        email: cadastroData.email,
        telefone: cadastroData.telefone,
        senha: cadastroData.senha,
        id: this.usuarioService.getUsuariosCadastrados().length + 1
      };
      
      this.usuarioService.cadastrarUsuario(novoUsuario);
      this.authService.login(novoUsuario.id);
      setTimeout(() => {
        this.cadastroModal.dismiss(this.router.navigate(['/tabs/tab1']));
      }, 200);
    } else {
      this.exibirToast('Por favor, informe os seus dados!');
    }
  }

  //inicializa as configuracoes toast e aguarda ele ser chamado para exibir
  async exibirToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });

    await toast.present();
  }

}