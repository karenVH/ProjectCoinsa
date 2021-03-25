import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//importar los componentes
import {ConsultarProductoComponent} from './componentes/consultar-producto/consultar-producto.component';
import { RegistrarproductosComponent } from './componentes/registrarproductos/registrarproductos.component';
import { UbicacionesComponent } from './componentes/ubicaciones/ubicaciones.component';
import { ProximosvencerComponent } from './componentes/proximosvencer/proximosvencer.component';
import { RegistrarsalidaComponent } from './componentes/registrarsalida/registrarsalida.component';
import { LoginComponent } from './componentes/login/login.component';


const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path:  'consultar-producto', component: ConsultarProductoComponent},
  {path: 'registrarproductos', component:RegistrarproductosComponent},
  {path: 'ubicaciones', component:UbicacionesComponent},
  {path: 'proximosvencer', component:ProximosvencerComponent},
  {path: 'registrarsalida', component:RegistrarsalidaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
