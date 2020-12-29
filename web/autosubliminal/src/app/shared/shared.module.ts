import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { InfoDropdownComponent } from './components/info-dropdown/info-dropdown.component';
import { InputDropdownComponent } from './components/input/input-dropdown/input-dropdown.component';
import { InputMultiTextComponent } from './components/input/input-multi-text/input-multi-text.component';
import { ScrollComponent } from './components/scroll/scroll.component';

@NgModule({
  declarations: [
    ScrollComponent,
    InfoDropdownComponent,
    InputMultiTextComponent,
    InputDropdownComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    DropdownModule
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
    InputTextModule,
    InputNumberModule,
    DialogModule,
    TooltipModule,
    ScrollComponent,
    InfoDropdownComponent,
    InputMultiTextComponent,
    InputDropdownComponent
  ]
})
export class SharedModule { }
