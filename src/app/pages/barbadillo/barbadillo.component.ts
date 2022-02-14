import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barbadillo',
  templateUrl: './barbadillo.component.html',
  styleUrls: ['./barbadillo.component.css']
})
export class BarbadilloComponent implements OnInit {

  constructor() {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
  }

}
