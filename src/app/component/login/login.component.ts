import { BancoService } from './../../services/banco.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private BancoService: BancoService) {}

  ngOnInit(): void {
  }

  async loginGestor(usuarioInput: HTMLInputElement,
    passwordInput: HTMLInputElement) {

      const usuario = usuarioInput.value;
      const password = passwordInput.value;

    const ok = await this.BancoService.loginGestor(usuario, password);

    // if (ok) {
    //   alert('Autentificación Correcta');
    // } else {
    //   alert('Autentificación Incorrecta');
    // }

    const msg = ok ? 'Autentificación Correcta' : 'Autentificación Incorrecta';

    alert(msg);
  }
}
