import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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
    this.changeItemLanguageOfNavBar();

  }


  ngOnInit() { }



  changeItemLanguageOfNavBar() {
    this.translate.get(['home', 'products', 'categories', 'about_us', 'our_brands'])
      .subscribe(navBarHeadersTranslated => {

        this.home = navBarHeadersTranslated.home;
        this.products = navBarHeadersTranslated.products;
        this.categories = navBarHeadersTranslated.categories;
        this.about_us = navBarHeadersTranslated.about_us;
        this.our_brands = navBarHeadersTranslated.our_brands;

        this.items = [
          {
            label: this.home,
            icon: 'pi pi-fw pi-home',
            routerLink: "pages/home"
          },
          {
            label: this.products,
            icon: 'pi pi-fw pi-box',
            routerLink: "pages/products"
          },
          {
            label: this.categories,
            icon: 'pi pi-fw pi-microsoft',
            routerLink: "pages/categories"
          },
          {
            label: this.about_us,
            icon: 'pi pi-fw pi-pencil',
            routerLink: "pages/contact"
          },
          {
            label: this.our_brands,
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
      });
  }

}
