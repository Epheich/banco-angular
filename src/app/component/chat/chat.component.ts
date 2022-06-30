import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { MensajeChat } from '../../models/mensaje-chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensajes: MensajeChat[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {

    this.chatService.escucharMensajes((mensaje: MensajeChat) => {
     


      

      const fechaActual = new Date();

      let minutos = fechaActual.getMinutes().toString();
      if(minutos.length === 1) {
        minutos = '0' + minutos;
      }

      mensaje.hora = `${fechaActual.getHours()}:${minutos}`;

      this.mensajes.push(mensaje);
    });
  }

  onMensaje(mensajeInput: HTMLInputElement) {
    const mensaje = mensajeInput.value;

    if (!mensaje) {
      return;
    }

    const mensajeChat: MensajeChat = {
      usuario: 'Sistema',
      mensaje: mensaje,
      
    }


    this.chatService.enviar(mensajeChat);
    mensajeInput.value = '';
  }
  onEnviarMensajeEnter(
    event: KeyboardEvent,
    mensajeInput: HTMLInputElement,
  ) {
    if(event.key === 'Enter') {
      this.onMensaje(mensajeInput);
    }
  }
  onBorrar() {
    this.mensajes = [];
  }
}

