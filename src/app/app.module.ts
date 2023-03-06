import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { BaseComponent } from './pages/base/base.component';
import { TechStackListComponent } from './pages/tech-stack-list/tech-stack-list.component';
import { TeamComponent } from './pages/team/team.component';
import { TechStackDetailComponent } from './pages/tech-stack-detail/tech-stack-detail.component';
import { TechStackInfoComponent } from './components/tech-stack-info/tech-stack-info.component';
import { TechStackAnswersInfoComponent } from './components/tech-stack-answers-info/tech-stack-answers-info.component';

@NgModule({
  declarations: [
    BaseComponent,
    TechStackListComponent,
    TeamComponent,
    TechStackDetailComponent,
    TechStackInfoComponent,
    TechStackAnswersInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    MenuModule,
    BrowserAnimationsModule,
    CardModule
  ],
  providers: [],
  bootstrap: [BaseComponent]
})
export class AppModule { }
