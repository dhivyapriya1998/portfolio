import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    data: { title: '' }
  },
  {
    path: 'about', component: AboutComponent,
    data: { title: 'About Me', }
  },
  {
    path: 'expertise', component: SkillsComponent,
    data: { title: "My Expertise", }
  },
  {
    path: 'education', component: WorkComponent,
    data: { title: "Education & Experience", }
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// 
