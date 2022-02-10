import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LegalInfoComponent } from './legal-info/legal-info.component';
import { PrivacityComponent } from './privacity/privacity.component';
import { UseConditionsComponent } from './use-conditions/use-conditions.component';


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