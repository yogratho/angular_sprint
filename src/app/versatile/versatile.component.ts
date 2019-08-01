import { Component, OnInit } from '@angular/core';
import { TrainerSkillService } from '../trainer-skill.service';

@Component({
  selector: 'app-versatile',
  templateUrl: './versatile.component.html',
  styleUrls: ['./versatile.component.css']
})
export class VersatileComponent implements OnInit {
  public message=[];
  constructor(private trainerSkill:TrainerSkillService) { }

  ngOnInit() {
    this.trainerSkill.skilledTrainer().subscribe(data=>this.message=data);
  }

}
