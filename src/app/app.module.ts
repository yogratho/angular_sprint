import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import {TrainerSkillService} from './trainer-skill.service'
import { MyControllerComponent } from './my-controller/my-controller.component';
import { FormsModule} from '@angular/forms';
import { VersatileComponent } from './versatile/versatile.component';
import { DeletionComponent } from './deletion/deletion.component';
import { SkillAdditionComponent } from './skill-addition/skill-addition.component';
import { SkillBasedCountComponent } from './skill-based-count/skill-based-count.component';
@NgModule({
  declarations: [
    AppComponent,
   MyControllerComponent,
   VersatileComponent,
   DeletionComponent,
   SkillAdditionComponent,
   SkillBasedCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TrainerSkillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
