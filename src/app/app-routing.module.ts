import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SkillsComponent } from './skills/skills.component';



const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '', redirectTo:"/home", pathMatch:"full"},
  { path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
