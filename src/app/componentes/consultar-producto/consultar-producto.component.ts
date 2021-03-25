import { Component, OnInit } from '@angular/core';
import { ProductosService } from  '../../servicios/productos.service';

@Component({
  selector: 'app-consultar-producto',
  templateUrl: './consultar-producto.component.html',
  styleUrls: ['./consultar-producto.component.css']
})
export class ConsultarProductoComponent implements OnInit {
      public productos: any[];
      public estado;

  constructor(
    private servicioProductos: ProductosService
  ) { }

  ngOnInit(){
    this.getProductos();
  }
  //funcion para traer productos:
  getProductos(){
    this.servicioProductos.catalogo().subscribe(
      res =>{
        if (!res.catalogo) {
          this.estado = 'Error no se han cargado los productos';
        } else {
          this.productos = res.catalogo;
          this.estado = 'productos cargados';
          console.log(this.productos);
        }
      },
      error=>{
        var MsjError = <any>error;
        console.log(MsjError);

        if (MsjError != null) {
          this.estado = 'error';
        }
      });
  }

}
