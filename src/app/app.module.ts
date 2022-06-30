import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './component/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatComponent } from './component/chat/chat.component';
import { LoginClienteComponent } from './component/login-cliente/login-cliente.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    ChatComponent,
    LoginClienteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
