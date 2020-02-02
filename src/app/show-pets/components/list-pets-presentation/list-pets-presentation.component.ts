import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IPet, HeadersPet } from '../../services/models-pet';

/**
 * Component for only list presentation and events list
 * This a PUSH component , for better performance , and it is reusable for other functions
 */
@Component({
  selector: 'app-list-pets-presentation',
  templateUrl: './list-pets-presentation.component.html',
  styleUrls: ['./list-pets-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListPetsPresentationComponent implements OnInit {
  
  //main data
  @Input()
  listPets: IPet[];

  //page state buttons
  @Input()
  enableFirst: boolean;
  @Input()
  enableLast: boolean;
  @Input()
  enablePrev: boolean;
  @Input()
  enableNext: boolean;
  @Input()
  hasAllPage: boolean;

  //page events
  @Output()
  next=new EventEmitter();
  @Output()
  prev=new EventEmitter();
  @Output()
  first=new EventEmitter();
  @Output()
  last=new EventEmitter();
  @Output()
  allPage=new EventEmitter();
  
  //row event
  @Output()
  row=new EventEmitter();

  Headers=HeadersPet;
 // Sort properties
  @Input()
  currentSort:HeadersPet;
  @Input()
  currentSortOrder:'asc'|'desc';
  @Output()
  sortEvent= new EventEmitter<{column:HeadersPet,order:'asc'|'desc'}>();

  constructor() { }

  ngOnInit() {
  }

   /**
   * Call sort action ,and sets the bindings, emit the current state
   * @param sort , type sort
   */
  sort(sort:HeadersPet){
    if(this.currentSort===sort){
      this.currentSortOrder=this.currentSortOrder==='asc'?'desc':'asc';
    }else{
      this.currentSort=sort;
      this.currentSortOrder='asc';
    }
    this.sortEvent.emit({column:this.currentSort,order:this.currentSortOrder});
  }

  /**
   * Classes for showing the icon sort
   */
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
}
