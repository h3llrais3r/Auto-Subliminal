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
import { InfoIconComponent } from './components/info-icon/info-icon.component';
import { InputDropdownComponent } from './components/input/dropdown/input-dropdown.component';
import { InputMultiTextComponent } from './components/input/multi-text/input-multi-text.component';
import { InputNumberComponent } from './components/input/number/input-number.component';
import { InputTextComponent } from './components/input/text/input-text.component';
import { ScrollComponent } from './components/scroll/scroll.component';

@NgModule({
  declarations: [
    ScrollComponent,
    InfoIconComponent,
    InputTextComponent,
    InputNumberComponent,
    InputDropdownComponent,
    InputMultiTextComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
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
    InfoIconComponent,
    InputTextComponent,
    InputNumberComponent,
    InputDropdownComponent,
    InputMultiTextComponent
  ]
})
export class SharedModule { }
