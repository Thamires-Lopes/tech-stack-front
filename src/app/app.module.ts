import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BaseComponent } from './pages/base/base.component';
import { TechStackListComponent } from './pages/tech-stack-list/tech-stack-list.component';

@NgModule({
  declarations: [
    BaseComponent,
    TechStackListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [BaseComponent]
})
export class AppModule { }
