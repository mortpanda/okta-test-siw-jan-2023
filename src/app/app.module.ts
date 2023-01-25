import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonModule } from 'primeng/button';
import { DockModule } from 'primeng/dock';
import { DockComponent } from '../app/shared/dock/dock.component';
import { PrimeIcons } from 'primeng/api';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import {ToolbarModule} from 'primeng/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfileComponent,
    DockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ButtonModule,
    DockModule,
    NgxJsonViewerModule,
    ToolbarModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
