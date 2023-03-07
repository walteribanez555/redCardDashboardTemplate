import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampDescuentosRoutingModule } from './camp-descuentos/camp-descuentos-routing.module';
import { CuponesRoutingModule } from './cupones/cupones-routing.module';
import { PlanesRoutingModule } from './planes/planes-routing.module';
import { PolizasRoutingModule } from './polizas/polizas-routing.module';
import { ReportesRoutingModule } from './reportes/reportes-routing.module';
import { SitioWebRoutingModule } from './sitio-web/sitio-web-routes.module';
import { UsuariosRoutingModule } from './usuarios/usuarios-routing.module';




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
    loadChildren: () => import('./sitio-web/sitio-web-routes.module').then(m => m.SitioWebRoutingModule)
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
    SitioWebRoutingModule
  ],
  exports: [RouterModule],
  
})
export class AppRoutingModule { 
    

 }
