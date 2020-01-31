import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complex',
  templateUrl: './complex.component.html',
  styleUrls: ['./complex.component.scss']
})
export class ComplexComponent implements OnInit {
  datos = [1, 2, 3, 4];

  constructor() {}

  ngOnInit() {}
  next() {
    this.datos = this.datos.concat([5, 6, 7]);
  }
}
