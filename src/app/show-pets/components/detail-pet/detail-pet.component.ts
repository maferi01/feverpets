import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detail-pet',
  templateUrl: './detail-pet.component.html',
  styleUrls: ['./detail-pet.component.scss']
})
export class DetailPetComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
     this.activatedRoute.paramMap
    .pipe(map(() => window.history.state))
    .subscribe(dat=>console.log('pet data',dat));
  
  }

}
