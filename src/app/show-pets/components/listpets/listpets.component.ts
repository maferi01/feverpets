import { Component, OnInit, OnDestroy } from '@angular/core';
import { PetsDataService } from '../../services/pets-data.service';
import { ThrowStmt } from '@angular/compiler';
import { IPet } from '../../services/models-pet';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listpets',
  templateUrl: './listpets.component.html',
  styleUrls: ['./listpets.component.scss']
})
export class ListpetsComponent implements OnInit , OnDestroy{
  
  listPets: IPet[];
  subs: Subscription[]=[];
  urlFirst: string;
  urlLast: string;
  urlPrev: string;
  urlNext: string;
  urlCurrent: string;

  constructor(private readonly servPets:PetsDataService ) { }

  ngOnInit() {
    this.loadData();
  }

  first(){
    this.loadData(this.urlFirst);
  }

  last(){
    this.loadData(this.urlLast);
  }

  next(){
    this.loadData(this.urlNext);
  }

  prev(){
    this.loadData(this.urlPrev);
  }

  loadData(urlPage?:string){
    const subs= this.servPets.getPetList(urlPage).subscribe(data=>{
      this.listPets=data.list;
      this.urlFirst=data.urlFirst;
      this.urlLast=data.urlLast;
      this.urlPrev=data.urlPrev;
      this.urlNext= data.urlNext;
      this.urlCurrent= data.urlCurrent;
    });
    this.subs.push(subs);
  }

  isEnableAction(action:'first'|'last'|'next'|'prev'):boolean{
    switch(action){
      case 'first':{
        return !(this.urlFirst===this.urlCurrent);
      }
      case 'last':{
        return !(this.urlLast===this.urlCurrent);
      }
      case 'prev':{
        return !!(this.urlPrev);
      }
      case 'next':{
        return !!(this.urlNext);
      }
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach(s=>s.unsubscribe());
  }
}
