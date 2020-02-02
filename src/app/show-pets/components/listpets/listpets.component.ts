import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/components/base-component';

import { HeadersPet, IPet } from '../../services/models-pet';
import { PetsDataService } from '../../services/pets-data.service';

/**
 * Component list for pets home
 * This is a container-smart comp , it manages only the logic-data
 * It contains the presentation comp for the render  
 */
@Component({
  selector: 'app-listpets',
  templateUrl: './listpets.component.html',
  styleUrls: ['./listpets.component.scss']
})
export class ListpetsComponent  extends BaseComponent implements OnInit , OnDestroy{
  
  listPets: IPet[];
  urlFirst: string;
  urlLast: string;
  urlPrev: string;
  urlNext: string;
  urlCurrent: string;
  Headers=HeadersPet;
  currentSort:HeadersPet;
  currentSortOrder:'asc'|'desc';

  constructor(private readonly servPets:PetsDataService, private readonly router:Router ) { 
    super();
    this.currentSortOrder='asc';
  }

  ngOnInit() {
    this.loadData(undefined,true);
  }

  /**
   * Pagination actions
   */
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

  getAllPage(){
    this.hasAll()?this.loadData():this.loadData(this.servPets.urlPet);
  }

  hasAll():boolean{
    return !this.urlFirst; 
  }
 /*********************** */

 /**
  * Load data from this comp. it takes the urlpage and if it recover state for first time
  * @param urlPage 
  * @param firstLoad 
  */
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

  /**
   * Helpers to check enable status pagination
   * @param action 
   */
  
  get enableFirst():boolean{
    return !this.hasAll() && !(this.urlFirst===this.urlCurrent);
  }
  get enableLast():boolean{
    return !this.hasAll() && !(this.urlLast===this.urlCurrent);
  }
  get enablePrev():boolean{
    return  !this.hasAll() && !!(this.urlPrev);
  }
  get enableNext():boolean{
    return !this.hasAll() && !!(this.urlNext);
  }
  
  /**
   * Navigate to detail, pass the pet model
   * @param pet 
   */
  clickRow(pet:IPet){
    this.router.navigate(['pets/detail'],{state:pet});
  }

  /**
   * Saves the sort options
   * @param sort , type sort
   */
  sort(sort:{column:HeadersPet,order}){
    this.currentSort=sort.column;
    this.currentSortOrder=sort.order;
  }


 /**
  * Destroy , saves the order state
  */
  ngOnDestroy(): void {
    this.servPets.saveOrder(this.currentSort,this.currentSortOrder);
    super.ngOnDestroy(); 
  }
}
