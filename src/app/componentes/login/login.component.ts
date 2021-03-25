import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../interface/user.interface';
import { UserService } from  '../../servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
   // public year = new Date();
   // public role;
   // public perfil;
   // public tipouser;
   // public session;

  constructor(
    // Configuramos variables privadas para el acceso de router:
    // private _route: ActivatedRoute,
    // private _router: Router,
    // private serviciousuario: UserService
  ) {
 }

  ngOnInit(): void {
  }
  // Funciones de login:
  // ingreso(data): void {
  //   // Pasamos los valores del formulario al servicio:
  //   this.role = data.value;
  //   this.serviciousuario.login(this.role).subscribe( res =>{
  //
  //     if (res.Usuario) {
  //       this.perfil = res.Usuario;
  //       this.session = 'logueado';
  //       // Almacenamos en el dispositivo los datos obtenidos:
  //       localStorage.setItem('usuario', JSON.stringify(this.perfil));
  //       // Almacenamos el tipo de perfil:
  //       this.tipouser = this.perfil.Administrador;
  //       this.serviciousuario.getRol(this.tipouser);
  //       console.log(this.perfil);
  //       console.log(this.tipouser);
  //     } else {
  //       this.session = 'Error de Sessión';
  //     }
  //     // Despues de obtener respuesta del back, navegar a la página siguiente:
  //     switch (this.tipouser) {
  //       case '1':
  //         return this.perfil;
  //         console.log('Usuario Administrador');
  //         break;
  //       case '0':
  //         return this.perfil;
  //         console.log('Usuario Administrador');
  //         break;
  //
  //       default:
  //         console.log(this.session);
  //         break;
  //     }
  //     // Ya capturado podemos navegar a la página de reportes y realizar las operaciones según l usuario:
  //     this._router.navigate(['/registrarproducto']);
  //   },
  //   error =>{
  //     let errMsg = <any>error;
  //     console.log(errMsg);
  //     if (errMsg != null) {
  //       this.session = 'Error de suscripción';
  //     }
  //   });
  //   this.session = 'Error';
  //   console.log(this.session);
//  }


}
