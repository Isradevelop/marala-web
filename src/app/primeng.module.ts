import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SlideMenuModule } from 'primeng/slidemenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CascadeSelectModule } from 'primeng/cascadeselect';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    TableModule,
    CardModule,
    CarouselModule,
    PasswordModule,
    DividerModule,
    InputTextareaModule,
    ScrollTopModule,
    ScrollPanelModule,
    SlideMenuModule,
    PanelMenuModule,
    CascadeSelectModule
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    InputTextModule,
    TableModule,
    CardModule,
    CarouselModule,
    PasswordModule,
    DividerModule,
    InputTextareaModule,
    ScrollTopModule,
    ScrollPanelModule,
    SlideMenuModule,
    PanelMenuModule,
    CascadeSelectModule
  ]
})
export class PrimengModule { }
