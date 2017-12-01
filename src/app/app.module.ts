import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';


import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { AdminModule } from './pages/admin/admin.module';
import { MyClassModule } from './pages/my-class/my-class.module';
import { ServiceModule } from './services/service.module';
import { NavComponent } from './common-component/nav/nav.component';
import { CommonComponentModule } from './common-component/common-component.module';

import { rootReducer, INITIAL_STATE, IAppState } from './store/app.store';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
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
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools:DevToolsExtension){
    const enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore( rootReducer, INITIAL_STATE, [], enhancers );
  }
}
