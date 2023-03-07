import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoPolizasComponent } from './listado-polizas/listado-polizas.component';
import { GenerarPolizasComponent } from './generar-polizas/generar-polizas.component';
import { GenerarCotizacionComponent } from './generar-cotizacion/generar-cotizacion.component';
import { polizasRoutingModule } from './polizas-routing.module';



@NgModule({
  declarations: [
    ListadoPolizasComponent,
    GenerarPolizasComponent,
    GenerarCotizacionComponent
  ],
  imports: [
    CommonModule,
    polizasRoutingModule
  ],
  exports: [ 
    ListadoPolizasComponent,
    GenerarPolizasComponent,
    GenerarCotizacionComponent
  ]
})
export class PolizasModule { }
