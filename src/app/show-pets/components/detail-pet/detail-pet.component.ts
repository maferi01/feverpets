import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { IPet, IPetDetail } from '../../services/models-pet';
import { IKeyValue } from 'src/app/shared/components/list-key-values/modellistkeys';
import { PetsDataService } from '../../services/pets-data.service';
import { BaseComponent } from 'src/app/shared/components/base-component';
/**
 * Detail pet component
 */
@Component({
  selector: 'app-detail-pet',
  templateUrl: './detail-pet.component.html',
  styleUrls: ['./detail-pet.component.scss']
})
export class DetailPetComponent extends BaseComponent implements OnInit {
  pet:IPetDetail;
  keyValues:IKeyValue[];
  constructor(public activatedRoute: ActivatedRoute,private readonly servPets:PetsDataService) {
    super();
   }

   /**
    * Init loads the detail with the code pet,
    * Which is got from router 
    * Loads the list key-values
    */
  ngOnInit() {
   const sub=  this.activatedRoute.paramMap
    .pipe(
    map(() => window.history.state),
    mergeMap((dat:IPet)=>this.servPets.getPetDetail(dat.id.toString()))
    ).subscribe((dat:IPetDetail)=>{
      console.log('pet data',dat);
      this.pet=dat;
      this.keyValues=[];
      this.keyValues.push({key:'Name',value:dat.name});
      this.keyValues.push({key:'Kind',value:dat.kind});
      this.keyValues.push({key:'Length',value:dat.length});
      this.keyValues.push({key:'Weight',value:dat.weight});
      this.keyValues.push({key:'Height',value:dat.height});
      this.keyValues.push({key:'Healthy',value:dat.healthy});
      
      this.keyValues.push({key:'Description',value:dat.description});
    });
    this.subs.push(sub);
  }

}
