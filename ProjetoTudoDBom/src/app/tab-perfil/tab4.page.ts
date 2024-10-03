import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardSubtitle } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { UsuarioService } from '../services/usuario.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: true,
  imports: [IonCardSubtitle, IonCardContent, IonCard, IonCol, IonRow, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})

export class Tab4Page {
  usuarioService = inject(UsuarioService);
  authService = inject(AuthService);

  usuarios: { nome: string; cpf: number; email: string; telefone: number; senha: string; id: number } | null = null;

  constructor() {}

  ngOnInit(): void {
    const userId = this.authService.getUserId();
    this.getDadosUsuario(userId);
  }

  getDadosUsuario(userId: number){
    const usuario = this.usuarioService.getUsuariosCadastrados().find((usuario) => usuario.id == userId);
    if(usuario){
      console.log(this.usuarios = usuario);
    }else{
      console.log('Usuário não encontrado');
    }
  }

}
