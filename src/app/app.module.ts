import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProgramFeatureModule } from 'feature-libs/program';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store.module';

const FEATURE_MODULES = [ProgramFeatureModule];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStoreModule,
    ...FEATURE_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
