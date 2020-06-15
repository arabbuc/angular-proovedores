import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicioComponent,
    ProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
