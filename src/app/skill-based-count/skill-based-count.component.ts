import { Component, OnInit } from '@angular/core';
import { TrainerSkillService } from '../trainer-skill.service';

@Component({
  selector: 'app-skill-based-count',
  templateUrl: './skill-based-count.component.html',
  styleUrls: ['./skill-based-count.component.css']
})
export class SkillBasedCountComponent implements OnInit {
  public message=[];
  public skill:string;
  public check=true;
  public response=false;
  constructor(private trainerSkill:TrainerSkillService) { }

  ngOnInit() {
  }
  count()
  {
    this.trainerSkill.countTrainers(this.skill).subscribe(data=>this.message=data);
    this.check=false;
    this.response=true;
  }

}
