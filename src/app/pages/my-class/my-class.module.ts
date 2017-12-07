import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyClassRoutingModule } from './my-class-routing.module';
import { MyClassComponent } from './my-class.component';

@NgModule({
  imports: [
    CommonModule,
    MyClassRoutingModule
  ],
  declarations: [MyClassComponent]
})
export class MyClassModule { }
