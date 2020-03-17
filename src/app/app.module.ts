import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { OrderService } from './order.service';

import { AppState } from './shared/app.state';
import { RouterState } from './shared/router.state';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { StoreModule } from '@ngrx/store';
import { AppEffects } from './shared/app.effects';
import { appReducer } from './shared/app.reducer';
import { RouterEffects } from './shared/router.effetcts';
import { routerReducer } from './shared/router.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxsModule.forRoot([
      RouterState,
      AppState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    // SaladModule,
    // StoreModule.forRoot({
    //   app: appReducer,
    //   router: routerReducer
    // }),
    // EffectsModule.forRoot([
    //   RouterEffects,
    //   AppEffects
    // ])

  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
