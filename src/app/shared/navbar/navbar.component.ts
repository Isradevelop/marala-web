import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  home: any;
  products: any;
  categories: any;
  about_us: any;
  our_brands: any;

  code: string;

  items: MenuItem[];

  constructor(private apiService: ApiService, private translate: TranslateService) {

    //this.apiService.getToken().subscribe(token => { console.log(token) });
  }


  ngOnInit() {
    this.translate.onLangChange.subscribe((data: LangChangeEvent) => {
      this.setLabels(data.translations);
    });
  }



  setLabels(labels: any) {
    this.items = [
      {
        label: labels.home,
        icon: 'pi pi-fw pi-home',
        routerLink: "pages/home"
      },
      {
        label: labels.products,
        icon: 'pi pi-fw pi-box',
        routerLink: "pages/products"
      },
      {
        label: labels.categories,
        icon: 'pi pi-fw pi-microsoft',
        routerLink: "pages/categories"
      },
      {
        label: labels.about_us,
        icon: 'pi pi-fw pi-pencil',
        routerLink: "pages/contact"
      },
      {
        label: labels.our_brands,
        icon: 'pi pi-fw pi-star',
        items: [
          { label: 'Cervezas Alhambra', routerLink: "pages/alhambra" },
          { label: 'Solán de Cabras', routerLink: "pages/solan-de-cabras" },
          { label: 'Pagos del Rey', routerLink: "pages/pagos-del-rey" },
          { label: 'Veganzones', routerLink: "pages/veganzones" },
          { label: 'Barbadillo', routerLink: "pages/barbadillo" },
          { label: 'Riska', routerLink: "pages/riska" }
        ]
      }
    ];

  }
}
