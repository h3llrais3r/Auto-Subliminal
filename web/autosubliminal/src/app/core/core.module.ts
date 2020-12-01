import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CountdownModule } from 'ngx-countdown';
import { SharedModule } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { PageFooterComponent } from './ui/page/footer/page-footer.component';
import { PageHeaderComponent } from './ui/page/header/page-header.component';

@NgModule({
  declarations: [
    PageHeaderComponent,
    PageFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MenubarModule,
    SharedModule, // needed for pTemplate to work
    CountdownModule
  ],
  exports: [
    PageHeaderComponent,
    PageFooterComponent
  ]
})
export class CoreModule {
  // Prevent re-import of core module
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
