import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { InfoIconComponent } from './components/info-icon/info-icon.component';
import { InputDropdownComponent } from './components/input/dropdown/input-dropdown.component';
import { InputMultiTextComponent } from './components/input/multi-text/input-multi-text.component';
import { InputNumberComponent } from './components/input/number/input-number.component';
import { InputSwitchComponent } from './components/input/switch/input-switch.component';
import { InputTextComponent } from './components/input/text/input-text.component';
import { ScrollComponent } from './components/scroll/scroll.component';

@NgModule({
  declarations: [
    ScrollComponent,
    InfoIconComponent,
    InputTextComponent,
    InputNumberComponent,
    InputSwitchComponent,
    InputDropdownComponent,
    InputMultiTextComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    InputSwitchModule,
    DropdownModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,
    MessageModule,
    ToastModule,
    PanelModule,
    TableModule,
    TabViewModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    InputSwitchModule,
    DropdownModule,
    ListboxModule,
    DialogModule,
    TooltipModule,
    ScrollComponent,
    InfoIconComponent,
    InputTextComponent,
    InputNumberComponent,
    InputSwitchComponent,
    InputDropdownComponent,
    InputMultiTextComponent
  ]
})
export class SharedModule { }
