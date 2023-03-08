import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoCuponesComponent } from './listado-cupones/listado-cupones.component';
import { CrearCuponesComponent } from './crear-cupones/crear-cupones.component';
import { CuponesRoutingModule } from './cupones-routing.module';



@NgModule({
  declarations: [
    ListadoCuponesComponent,
    CrearCuponesComponent
  ],
  imports: [
    CommonModule,
    CuponesRoutingModule
  ],
  exports:[
    ListadoCuponesComponent,
    CrearCuponesComponent
  ]
})
export class CuponesModule { }
