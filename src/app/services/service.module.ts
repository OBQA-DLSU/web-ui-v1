import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AuthenticationService } from './authentication.service';


@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: []
})
export class ServiceModule { 
  static forRoot() : ModuleWithProviders {
    return{
        ngModule : ServiceModule,
        providers: [ 
          AuthenticationService
        ]
    }
}
}