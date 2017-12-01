import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { AdminModule } from './pages/admin/admin.module';
import { MyClassModule } from './pages/my-class/my-class.module';

import { ServiceModule } from './services/service.module';
import { NavComponent } from './common-component/nav/nav.component';
import { CommonComponentModule } from './common-component/common-component.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () => HomeModule
      },
      {
        path: 'admin',
        loadChildren: () => AdminModule
      },
      {
        path: 'my-class',
        loadChildren: () => MyClassModule
      }
    ]),
    ServiceModule.forRoot(),
    CommonComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
