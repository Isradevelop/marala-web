import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private apiService: ApiService) {

    this.apiService.getToken().subscribe(token => { console.log(token) });


  }



  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        routerLink: "pages/home"
      },
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-box',
      },
      {
        label: 'Categorías',
        icon: 'pi pi-fw pi-microsoft',
        routerLink: "pages/categories"
      },
      {
        label: 'Sobre nosotros',
        icon: 'pi pi-fw pi-pencil',
        routerLink: "pages/contact"
      },
    ];
  }

}
