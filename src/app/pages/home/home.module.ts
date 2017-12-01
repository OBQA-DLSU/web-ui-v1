import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CommonComponentModule } from '../../common-component/common-component.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CommonComponentModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
