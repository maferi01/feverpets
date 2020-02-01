import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap, map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IPet, IListPet, HeadersPet, HealthLevel, IPetDetail } from './models-pet';

/**
 * Service pets implements all the logic required. 
 */
@Injectable()
export class PetsDataService {
  //urls pet
  urlListpets:string;
  urlPet:string;

  //state sort 
  currentSort:HeadersPet;
  currentSortOrder:'asc'|'desc';


  constructor(private http:HttpClient) {
    this.urlPet='http://my-json-server.typicode.com/Feverup/fever_pets_data/pets';
    this.urlListpets=this.urlPet+'?_page=1';
   
  }

  /**
   * get list pets from serve, it supports pagination url
   * @param urlPage 
   */ 
  getPetList(urlPage=this.urlListpets):Observable<IListPet>{
    return this.http.get<IListPet>(urlPage, { observe: 'response' }).pipe(
      tap(d=>console.log('request list pets',d)),
      // convert Response to IListPet
      map(d=>{
        const link=d.headers.get('link');
        return {
         urlFirst: this.getUrlLink(link,'first'), 
         urlLast: this.getUrlLink(link,'last'),
         urlNext: this.getUrlLink(link,'next'),
         urlPrev: this.getUrlLink(link,'prev'), 
         urlCurrent:urlPage,
         list: d.body as any
        } as IListPet;
      }),
      tap(d=>console.log('convert list pets',d)),
    );
  }

  /**
   * 
   * @param link Helper to get partial url
   * @param arg1 
   */
  getUrlLink(link: string, key: string): string {
    let url;
    if(!link){return null};
     link.split(',').forEach(cad=> {
      if(cad.split(';')[1].includes(`rel="${key}"`)){
       url=cad.split(';')[0].replace('<','').replace('>','').trim();;
      }
     });
     return url;
  }

  /**
   * Gets detail pet from server by code pet, add new proccess fields
   * @param key 
   */
  getPetDetail(key:string):Observable<IPetDetail>{
    return this.http.get<IPet>(this.urlPet+'/'+key).pipe(
      map(d=>{
       // get healthy level and add to model
        return {
        ...d,
        healthy: this.getHealthyLevel(d)} as IPetDetail;
      }),
      tap(d=>console.log('pet detail',d))
    );
  }

  /**
   * Helper to get level healthy since rules bussiness
   * @param pet 
   */
  getHealthyLevel(pet:IPet):HealthLevel{
   const point=pet.weight / (pet.height * pet.length);
    if(point<2 || point>5){
      return HealthLevel.UNHEALTHY;
    }else if(point>=3 && point<=5){
      return HealthLevel.HEALTHY;
    }else if(point>=2 && point<=3){
      return HealthLevel.VERY_HEALTHY;
    }  
  }

 /**
  * Saves the state order in this singleton
  * @param currentSort 
  * @param order 
  */
  saveOrder(currentSort:HeadersPet,order:'asc'|'desc'){
    this.currentSortOrder=order;
    this.currentSort=currentSort;
  }

}
