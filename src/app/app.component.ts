import { Component, OnInit, Renderer2,ViewChild,ElementRef } from '@angular/core';
import { routeSideNav } from './models/routes.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
  
]
})
export class AppComponent implements OnInit {


  display_sidenav = false;
  lightActive = true;
  darkActive = false;
  
  menuItems : routeSideNav[] = [  
    {
      label: 'Usuarios & Accesos',
      isDropdownOpen: false,
      dropdownHeight: '0',
      submenuItems: [
        {
          label: 'Buscar usuarios',
          route: 'usuarios/listado-usuarios'
        },
        {
          label: 'Crear usuarios',
          route: 'usuarios/agregado-usuarios'
        }
      ]
    },
    {
      label: 'Plans',
      isDropdownOpen: false,
      dropdownHeight: '0',
      submenuItems: [
        {
          label: 'Find Plans',
          route: 'planes/listado-planes'
        },
        {
          label: 'Crear plan',
          route: 'planes/crear-cobertura'
        },
        {
          label: 'Crear nueva categoria',
          route: 'planes/crear-categoria'
        },
        {
          label: 'Crear nueva cobertura',
          route: 'planes/crear-cobertura'
        }
      ]
    },
    {
      label: 'Cupones',
      isDropdownOpen :false,
      dropdownHeight : '0',
      submenuItems: [
        {
          label: 'Buscar cupon',
          route : 'cupones/listado-cupones'
        },
        {
          label : 'Crear cupon',
          route : 'cupones/crear-cupones'
        }
      ]
    },
    {
      label: 'Campañas de Descuento',
      isDropdownOpen: false,
      dropdownHeight:'0',
      submenuItems: [
        {
          label: 'Buscar campañas',
          route: 'camp-descuentos/listado-camp',
        },
        {
          label: 'Crear campañas',
          route : 'camp-descuentos/crear-camp'
        }
      ]

    },
    {
      label: 'Polizas',
      isDropdownOpen: false,
      dropdownHeight: '0',
      submenuItems: [
        {
          label: 'Buscar pólizas',
          route:'polizas/listado-polizas',
        },
        {
          label: 'Emitir póliza',
          route: 'polizas/generar-polizas',
        },
        {
          label: 'Crear cotización',
          route: 'polizas/generar-cotizacion'
        }
      ]

    },
    {
      label: 'inicio',
      isDropdownOpen: false,
      dropdownHeight: '0',
      submenuItems: [
        {
          label: 'Banner superior',
          route: 'sitio-web/inicio/banner-superior'
        },
        {
          label: 'Carusel principal',
          route: 'sitio-web/inicio/carusel-principal',
        },
        {
          label: 'Banner intermedio',
          route: 'sitio-web/inicio/banner-intermedio',
        },
        {
          label: 'Como funciona',
          route: 'sitio-web/inicio/como-funciona'
        },
        {
          label: 'Banner inferior',
          route: 'sitio-web/inicio/banner-inferior'
        }


      ]
    },
    {
      label:'Sobre nosotros',
      isDropdownOpen: false,
      dropdownHeight: '0',
      submenuItems: [
        {
          label:'Texto superior',
          route: 'sitio-web/sobre-nosotros/texto-superior'
        },
        {
          label:'Banner intermedio',
          route: 'sitio-web/sobre-nosotros/banner-intermedio'
        },
      ]

    },
    {
      label:'Ayuda',
      isDropdownOpen: false,
      dropdownHeight:'0',
      submenuItems: [
        {
          label:'Preguntas',
          route:'sitio-web/ayuda/preguntas'
        },
        {
          label:'Contacto',
          route: 'sitio-web/ayuda/contacto',
        },
        {
          label: 'Redes sociales',
          route: 'sitio-web/ayuda/redes-sociales'
        }

      ]
    }

    
    
    
    
  ];

  constructor(){}
  ngOnInit(){}

  

  toggleDropdown(menuItem : any) {
    menuItem.isDropdownOpen = !menuItem.isDropdownOpen;
    menuItem.dropdownHeight = menuItem.isDropdownOpen ? menuItem.submenuItems.length * 50 + 'px' : '0';
  }
  
 

  closeDropdown(menuItem : any) {
    menuItem.isDropdownOpen = false;
    menuItem.dropdownHeight = '0';
  }

  toggleDarkMode() {
    document.querySelector('body')?.classList.toggle('dark');
    document.querySelector('.darkmode-switch')?.classList.toggle('active');
    this.lightActive = !this.lightActive;
    this.darkActive = !this.darkActive;
    
  }

  toggleSidenav(){
    this.display_sidenav = !this.display_sidenav;
  }
}
