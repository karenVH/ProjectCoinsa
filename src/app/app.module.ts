import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultarProductoComponent } from './componentes/consultar-producto/consultar-producto.component';
import { RegistrarproductosComponent } from './componentes/registrarproductos/registrarproductos.component';
import { UbicacionesComponent } from './componentes/ubicaciones/ubicaciones.component';
import { ProximosvencerComponent } from './componentes/proximosvencer/proximosvencer.component';
import { RegistrarsalidaComponent } from './componentes/registrarsalida/registrarsalida.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductosService } from './servicios/productos.service';
import { UserService } from './servicios/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ConsultarProductoComponent,
    RegistrarproductosComponent,
    UbicacionesComponent,
    ProximosvencerComponent,
    RegistrarsalidaComponent,
    LoginComponent
  ],
  imports: [
    //BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductosService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
