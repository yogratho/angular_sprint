import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyControllerComponent } from './my-controller/my-controller.component';
import { VersatileComponent } from './versatile/versatile.component';
import { DeletionComponent } from './deletion/deletion.component';
import { SkillAdditionComponent } from './skill-addition/skill-addition.component';
import { SkillBasedCountComponent } from './skill-based-count/skill-based-count.component';

 
const routes: Routes = [

  {path:'trainerSkill',component:MyControllerComponent},
  {path:'mostVersatile',component:VersatileComponent},
  {path:'deletionpage',component:DeletionComponent},
  {path:'addSkill',component:SkillAdditionComponent},
  {path:'skillCount',component:SkillBasedCountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
