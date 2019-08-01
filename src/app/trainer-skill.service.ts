import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ITrainer } from './trainer';


@Injectable({
  providedIn: 'root'
})
export class TrainerSkillService {

  constructor(private http: HttpClient) { }
   myurl="http://10.236.246.57:8087/";
   mostSkilledTrainer="http://10.236.246.57:8087/mostVersatileTrainer";
   deletion_url="http://10.236.246.57:8087/delete/";
   addition_url="http://10.236.246.57:8087/addSkill";
   count_url="http://10.236.246.57:8087/empCount/";
  getTrainerSkills(id:string):Observable<any[]>
  {

    return this.http.get<any[]>(this.myurl+id);
      
    
  }
  skilledTrainer():Observable<any[]>
  {

    return this.http.get<any[]>(this.mostSkilledTrainer);
      
    }
    skilldeletion(Id:string):Observable<any[]>
    {
      return this.http.get<any[]>(this.deletion_url+Id);

    }
    skillAddition(datass:ITrainer):Observable<any[]>
    {
      return this.http.post<any[]>(this.addition_url,datass);

    }
    countTrainers(skillDesc:string):Observable<any[]>
    {
      return this.http.get<any[]>(this.count_url+skillDesc);

    }
}
