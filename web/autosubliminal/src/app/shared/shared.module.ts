import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ToastModule,
    TableModule,
    TabViewModule
  ]
})
export class SharedModule { }
