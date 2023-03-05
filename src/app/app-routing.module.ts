import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './pages/team/team.component';
import { TechStackDetailComponent } from './pages/tech-stack-detail/tech-stack-detail.component';
import { TechStackListComponent } from './pages/tech-stack-list/tech-stack-list.component';

const routes: Routes = [
  {path: '', component: TechStackListComponent},
  {path: 'team', component: TeamComponent},
  {path: 'tech-detail', component: TechStackDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
