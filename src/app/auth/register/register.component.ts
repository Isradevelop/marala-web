import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {

  value3: string;
  value4: string;

  constructor() {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
  }

}
