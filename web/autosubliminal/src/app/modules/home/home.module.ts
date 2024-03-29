import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeDownloadedComponent } from './downloaded/home-downloaded.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeSearchComponent } from './search/home-search.component';
import { HomeWantedComponent } from './wanted/home-wanted.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeWantedComponent,
    HomeDownloadedComponent,
    HomeSearchComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
