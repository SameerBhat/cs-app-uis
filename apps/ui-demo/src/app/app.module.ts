import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CompCommonModule } from "@cs-app-uis/comp/common";
import { CompFormModule } from "@cs-app-uis/comp/form";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";




@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
    imports: [BrowserModule, CompCommonModule, CompFormModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
