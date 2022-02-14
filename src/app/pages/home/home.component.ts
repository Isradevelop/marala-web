import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: any[] = [
    {
      path: '../assets/images/banner-alhambra.jpg'
    },
    {
      path: '../assets/images/banner-barbadillo.jpg'
    },
    {
      path: '../assets/images/banner-solan.jpg'
    },
    {
      path: '../assets/images/banner-pdr.jpg'
    },
    {
      path: '../assets/images/banner-cla.jpg'
    },
    {
      path: '../assets/images/banner-pagos-del-rey.jpg'
    },
    {
      path: '../assets/images/banner-nuevo-alhmabra.png'
    }
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor() {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
  }

}
