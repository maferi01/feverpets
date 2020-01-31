import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap, map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IPet, IListPet } from './models-pet';

@Injectable()
export class PetsDataService {

  urlListpets:string;
  urlDetailPet:string;

  constructor(private http:HttpClient) {
    this.urlListpets='https://my-json-server.typicode.com/Feverup/fever_pets_data/pets?_page=1';
    this.urlDetailPet='https://my-json-server.typicode.com/Feverup/fever_pets_data/pets';
   }

  getPetList():Observable<IListPet>{
    return this.http.get<IListPet>(this.urlListpets, { observe: 'response' }).pipe(
      tap(d=>console.log('request list pets',d)),
      // convert Response to IListPet
      map(d=>{
        const link=d.headers.get('link');
        return {
         urlFirst: this.getUrlLink(link,'first'), 
         urlLast: this.getUrlLink(link,'last'),
         urlNext: this.getUrlLink(link,'next'),
         urlPrev: this.getUrlLink(link,'prev'), 
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
     link.split(',').forEach(cad=> {
      if(cad.split(';')[1].includes(`rel="${key}"`)){
       url=cad.split(';')[0].replace('<','').replace('>','').trim();;
      }
     });
     return url;
  }

  getPetDetail():Observable<IPet>{
    return this.http.get<IPet>(this.urlListpets).pipe(
      map(d=>d),
      tap(d=>console.log('request pet detail',d))
    );
  }

}
