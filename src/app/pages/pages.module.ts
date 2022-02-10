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



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    LegalInfoComponent,
    PrivacityComponent,
    UseConditionsComponent,
    CategoriesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PrimengModule
  ]
})
export class PagesModule { }
