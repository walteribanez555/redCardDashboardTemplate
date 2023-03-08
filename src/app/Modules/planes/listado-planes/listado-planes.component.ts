
import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-listado-planes',
  templateUrl: './listado-planes.component.html',
  styleUrls: ['./listado-planes.component.css']
})
export class ListadoPlanesComponent {

  rows = [    {name: 'John', age: 25, city: 'New York'},
              {name: 'Jane', age: 30, city: 'San Francisco'},    
              {name: 'Bob', age: 35, city: 'Chicago'},    
              {name: 'Alice', age: 40, city: 'Los Angeles'},    
              {name: 'Peter', age: 45, city: 'Miami'},    
              {name: 'Sarah', age: 50, city: 'Houston'},    
              {name: 'Tom', age: 55, city: 'Seattle'},    
              {name: 'Linda', age: 60, city: 'Boston'},    
              {name: 'David', age: 65, city: 'Dallas'},    
              {name: 'Mary', age: 70, city: 'Washington DC'}  
            ];

  constructor(private elRef: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const tableContainer = this.elRef.nativeElement.querySelector('.table-container');
    const tableHeader = tableContainer.querySelector('thead');
    const tableRows = tableContainer.querySelectorAll('tbody tr');

    const containerRect = tableContainer.getBoundingClientRect();
    const headerRect = tableHeader.getBoundingClientRect();
    const lastRowRect = tableRows[tableRows.length - 1].getBoundingClientRect();

    if (containerRect.top + headerRect.height > window.innerHeight ||
        containerRect.bottom - lastRowRect.height < 0) {
      tableHeader.style.visibility = 'hidden';
      for (let i = 0; i < tableRows.length; i++) {
        tableRows[i].style.visibility = 'hidden';
      }
    } else {
      tableHeader.style.visibility = 'visible';
      for (let i = 0; i < tableRows.length; i++) {
        tableRows[i].style.visibility = 'visible';
      }
    }
  }
}
