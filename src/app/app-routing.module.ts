import { CommonModule } from '@angular/common';
import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampDescuentosRoutingModule } from './Modules/camp-descuentos/camp-descuentos-routing.module';
import { CuponesRoutingModule } from './Modules/cupones/cupones-routing.module';
import { PlanesRoutingModule } from './Modules/planes/planes-routing.module';
import { PlanesModule } from './Modules/planes/planes.module';
import { PolizasRoutingModule } from './Modules/polizas/polizas-routing.module';
import { ReportesRoutingModule } from './Modules/reportes/reportes-routing.module';
import { SitioWebRoutingModule } from './Modules/sitio-web/sitio-web-routes.module';
import { UsuariosRoutingModule } from './Modules/usuarios/usuarios-routing.module';




const routes : Routes = [
  {
    path : '**',
    redirectTo: 'usuarios/agregar-usuarios',
    pathMatch : 'full'

  },
  {
    path: '',
    redirectTo : 'usuarios/agregar-usuarios',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./Modules/sitio-web/sitio-web-routes.module').then(m => m.SitioWebRoutingModule)
  }


]

@NgModule({
  imports: [

    RouterModule.forRoot(routes),
    UsuariosRoutingModule,
    CampDescuentosRoutingModule,
    CuponesRoutingModule,
    PlanesRoutingModule,
    PolizasRoutingModule,
    ReportesRoutingModule,
    SitioWebRoutingModule,

  ],
  exports: [RouterModule],

})
export class AppRoutingModule {


 }
