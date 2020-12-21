import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ScrollComponent } from './components/scroll/scroll.component';

@NgModule({
  declarations: [
    ScrollComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    PanelModule,
    TableModule,
    TabViewModule,
    ButtonModule,
    DropdownModule,
    DialogModule,
    ScrollComponent
  ]
})
export class SharedModule { }
