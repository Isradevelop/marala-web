import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alhambra',
  templateUrl: './alhambra.component.html',
  styleUrls: ['./alhambra.component.css']
})
export class AlhambraComponent implements OnInit {

  constructor() {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
  }

}
