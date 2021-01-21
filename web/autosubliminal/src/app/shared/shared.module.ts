import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgxMaskModule } from 'ngx-mask';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { IconDropdownComponent } from './components/icon-dropdown/icon-dropdown.component';
import { InputDropdownComponent } from './components/input/dropdown/input-dropdown.component';
import { InputMultiSelectComponent } from './components/input/multi-select/input-multi-select.component';
import { InputMultiTextComponent } from './components/input/multi-text/input-multi-text.component';
import { InputNumberComponent } from './components/input/number/input-number.component';
import { InputSwitchComponent } from './components/input/switch/input-switch.component';
import { InputTextComponent } from './components/input/text/input-text.component';
import { MessageComponent } from './components/message/message.component';
import { MovieSettingsComponent } from './components/movie-settings/movie-settings.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ScrollComponent } from './components/scroll/scroll.component';
import { ShowSettingsComponent } from './components/show-settings/show-settings.component';
import { TableFilterComponent } from './components/table-filter/table-filter.component';

@NgModule({
  declarations: [
    ScrollComponent,
    IconDropdownComponent,
    InputTextComponent,
    InputNumberComponent,
    InputSwitchComponent,
    InputDropdownComponent,
    InputMultiTextComponent,
    InputMultiSelectComponent,
    ProgressBarComponent,
    TableFilterComponent,
    MessageComponent,
    MovieSettingsComponent,
    ShowSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    LazyLoadImageModule,
    MessageModule,
    MessagesModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    InputSwitchModule,
    DropdownModule,
    MultiSelectModule,
    DialogModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,
    LazyLoadImageModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    PanelModule,
    TableModule,
    TabViewModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    InputSwitchModule,
    DropdownModule,
    MultiSelectModule,
    ListboxModule,
    DialogModule,
    ConfirmDialogModule,
    TooltipModule,
    ScrollComponent,
    IconDropdownComponent,
    InputTextComponent,
    InputNumberComponent,
    InputSwitchComponent,
    InputDropdownComponent,
    InputMultiTextComponent,
    InputMultiSelectComponent,
    ProgressBarComponent,
    TableFilterComponent,
    MessageComponent,
    MovieSettingsComponent,
    ShowSettingsComponent
  ],
  providers: [
    ConfirmationService
  ]
})
export class SharedModule { }
