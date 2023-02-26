import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { BaseComponent } from './pages/base/base.component';
import { TechStackListComponent } from './pages/tech-stack-list/tech-stack-list.component';
import { TeamComponent } from './pages/team/team.component';

@NgModule({
  declarations: [
    BaseComponent,
    TechStackListComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    MenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [BaseComponent]
})
export class AppModule { }
