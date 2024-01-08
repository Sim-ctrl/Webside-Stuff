import { Component, OnInit } from '@angular/core';
import { DATASET } from './data';
import { Strom } from './strom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  liste: Strom[] = DATASET;
  selected: Strom|'default'='default';
  power = 0;
  max = 0; 
  

  ngOnInit() {
  }
  absenden() {
    if (this.selected === 'default') {
      this.power = 0;
      this.max = 0;
    } else {
      this.power = this.selected.power;
      this.max = this.selected.max;
    }
  }
  veraendern() {
    this.power = 0;
    this.max = 0;
  }
}