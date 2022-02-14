import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  items: MenuItem[];

  constructor() {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Bebidas con alcohol',
        items: [
          {
            label: 'Vinos',
            items: [
              { label: 'Tinto' },
              { label: 'Blanco' },
              { label: 'Rosado' },
              { label: 'Espumoso' },
            ]
          },
          {
            label: 'Destilados',
            items: [
              { label: 'Ginebra' },
              { label: 'Ron' },
              { label: 'Whisky' },
              { label: 'Vodka' },
            ]
          },
          {
            label: 'Cervezas',
          },
          {
            label: 'Licores y orujos',
          }
        ]
      },
      {
        label: 'Bebidas sin alcohol',
        items: [
          { label: 'Licores' },
          { label: 'Refrescos' },
          { label: 'Aguas' },
          { label: 'Leche y café' }
        ]
      },
      {
        label: 'Menaje'
      },
      {
        label: 'Limpieza'
      },
      {
        label: 'Alimentación',
        items: [
          { label: 'Aceites' },
          { label: 'Aceitunas' }
        ]
      },
      {
        label: 'Otros'
      }
    ];
  }

}
