import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlhambraComponent } from './alhambra/alhambra.component';
import { BarbadilloComponent } from './barbadillo/barbadillo.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LegalInfoComponent } from './legal-info/legal-info.component';
import { PagosDelReyComponent } from './pagos-del-rey/pagos-del-rey.component';
import { PrivacityComponent } from './privacity/privacity.component';
import { SolanDeCabrasComponent } from './solan-de-cabras/solan-de-cabras.component';
import { UseConditionsComponent } from './use-conditions/use-conditions.component';
import { VeganzonesComponent } from './veganzones/veganzones.component';
import { RiskaComponent } from './riska/riska.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'categories',
                component: CategoriesComponent
            },
            {
                path: 'contact',
                component: ContactComponent
            },
            {
                path: 'alhambra',
                component: AlhambraComponent
            },
            {
                path: 'barbadillo',
                component: BarbadilloComponent
            },
            {
                path: 'solan-de-cabras',
                component: SolanDeCabrasComponent
            },
            {
                path: 'pagos-del-rey',
                component: PagosDelReyComponent
            },
            {
                path: 'veganzones',
                component: VeganzonesComponent
            },
            {
                path: 'riska',
                component: RiskaComponent
            },
            {
                path: 'legal-info',
                component: LegalInfoComponent
            },
            {
                path: 'privacity',
                component: PrivacityComponent
            },
            {
                path: 'use-conditions',
                component: UseConditionsComponent
            },
            {
                path: '**',
                redirectTo: 'home'
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }