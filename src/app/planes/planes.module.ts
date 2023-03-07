import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoPlanesComponent } from './listado-planes/listado-planes.component';
import { CrearPlanComponent } from './crear-plan/crear-plan.component';
import { CrearCategoriaComponent } from './crear-categoria/crear-categoria.component';
import { CrearCoberturaComponent } from './crear-cobertura/crear-cobertura.component';
import { PlanesRoutingModule } from './planes-routing.module';



@NgModule({
  declarations: [
    ListadoPlanesComponent,
    CrearPlanComponent,
    CrearCategoriaComponent,
    CrearCoberturaComponent
  ],
  imports: [
    CommonModule,
    PlanesRoutingModule
  ],
  exports: [
    ListadoPlanesComponent,
    CrearPlanComponent,
    CrearCategoriaComponent,
    CrearCoberturaComponent
  ]
})
export class PlanesModule { }
