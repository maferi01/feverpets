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
  constructor(private readonly servPets:PetsDataService ) { }

  ngOnInit() {
   const subs= this.servPets.getPetList().subscribe(data=>{
      this.listPets=data.list;
    });
    this.subs.push(subs);
  }

  first(){

  }

  last(){

  }

  next(){

  }

  prev(){

  }

  ngOnDestroy(): void {
    this.subs.forEach(s=>s.unsubscribe());
  }
}
