import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import {FormsModule} from "@angular/forms";
import { ExtratoComponent } from './extrato/extrato.component';
import ptBr from '@angular/common/locales/pt';
import {registerLocaleData} from "@angular/common";
registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
