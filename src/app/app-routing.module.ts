import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './pages/team/team.component';
import { TechStackListComponent } from './pages/tech-stack-list/tech-stack-list.component';

const routes: Routes = [{path: '', component: TechStackListComponent}, {path: 'team', component: TeamComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
