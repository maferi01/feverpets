import { Component, OnInit, OnDestroy } from '@angular/core';
import { PetsDataService } from '../../services/pets-data.service';
import { ThrowStmt } from '@angular/compiler';
import { IPet, HeadersPet } from '../../services/models-pet';
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
  Headers=HeadersPet;
  currentSort:HeadersPet;
  currentSortOrder:'asc'|'desc';

  constructor(private readonly servPets:PetsDataService ) { 
    this.currentSortOrder='asc';
    //this.currentSort=HeadersPet.NAME;
  }

  ngOnInit() {
    this.loadData(undefined,true);
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

  loadData(urlPage?:string,firstLoad=false){
    const subs= this.servPets.getPetList(urlPage).subscribe(data=>{
      this.listPets=data.list;
      this.urlFirst=data.urlFirst;
      this.urlLast=data.urlLast;
      this.urlPrev=data.urlPrev;
      this.urlNext= data.urlNext;
      this.urlCurrent= data.urlCurrent;
      //recover sort order
      if(firstLoad && this.servPets.currentSort){
        this.currentSort=this.servPets.currentSort;
        this.currentSortOrder=this.servPets.currentSortOrder;
      }
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

  sort(sort:HeadersPet){
    if(this.currentSort===sort){
      this.currentSortOrder=this.currentSortOrder==='asc'?'desc':'asc';
    }else{
      this.currentSort=sort;
      this.currentSortOrder='asc';
    }
  }

  get classesSort(){
    const classes={};
    if(this.currentSortOrder==='asc'){
      classes['fa-angle-down']=true;
      classes['fa-angle-up']=false;
    }else{
      classes['fa-angle-up']=true;
      classes['fa-angle-down']=false;
    }
    return classes; 
    
  }


  ngOnDestroy(): void {
    this.servPets.saveOrder(this.currentSort,this.currentSortOrder);
    this.subs.forEach(s=>s.unsubscribe());
  }
}
