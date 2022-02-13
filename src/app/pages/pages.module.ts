import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PrimengModule } from '../primeng.module';
import { LegalInfoComponent } from './legal-info/legal-info.component';
import { PrivacityComponent } from './privacity/privacity.component';
import { UseConditionsComponent } from './use-conditions/use-conditions.component';
import { CategoriesComponent } from './categories/categories.component';
import { AlhambraComponent } from './alhambra/alhambra.component';
import { BarbadilloComponent } from './barbadillo/barbadillo.component';
import { SolanDeCabrasComponent } from './solan-de-cabras/solan-de-cabras.component';
import { PagosDelReyComponent } from './pagos-del-rey/pagos-del-rey.component';
import { VeganzonesComponent } from './veganzones/veganzones.component';
import { RiskaComponent } from './riska/riska.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    LegalInfoComponent,
    PrivacityComponent,
    UseConditionsComponent,
    CategoriesComponent,
    AlhambraComponent,
    BarbadilloComponent,
    SolanDeCabrasComponent,
    PagosDelReyComponent,
    VeganzonesComponent,
    RiskaComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PrimengModule
  ]
})
export class PagesModule { }
