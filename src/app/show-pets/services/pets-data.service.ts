import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap, map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IPet } from './models-pet';

@Injectable()
export class PetsDataService {

  urlListpets:string;
  urlDetailPet:string;

  constructor(private http:HttpClient) {
    this.urlListpets='https://my-json-server.typicode.com/Feverup/fever_pets_data/pets';
    this.urlDetailPet='https://my-json-server.typicode.com/Feverup/fever_pets_data/pets';
   }

  getPetList():Observable<IPet[]>{
    return this.http.get<IPet[]>(this.urlListpets).pipe(
      map(d=>d),
      tap(d=>console.log('request list pets',d))
    );
  }

  getPetDetail():Observable<IPet>{
    return this.http.get<IPet>(this.urlListpets).pipe(
      map(d=>d),
      tap(d=>console.log('request pet detail',d))
    );
  }

}
