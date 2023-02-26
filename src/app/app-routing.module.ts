import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechStackListComponent } from './pages/tech-stack-list/tech-stack-list.component';

const routes: Routes = [{path: '', component: TechStackListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
