
import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SitioWebRoutingModule } from './Modules/sitio-web/sitio-web-routes.module';

import { PlanesModule } from './Modules/planes/planes.module';
import { CuponesModule } from './Modules/cupones/cupones.module';
import { CampDescuentosModule } from './Modules/camp-descuentos/camp-descuentos.module';
import { UsuariosModule } from './Modules/usuarios/usuarios.module';
import { PolizasModule } from './Modules/polizas/polizas.module';
import { ReportesModule } from './Modules/reportes/reportes.module';



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
    UsuariosModule,
    CampDescuentosModule,
    CuponesModule,
    PlanesModule,
    PolizasModule,
    ReportesModule,
    SitioWebRoutingModule,
    CommonModule,

  ],
  exports: [RouterModule],

})
export class AppRoutingModule {


 }
