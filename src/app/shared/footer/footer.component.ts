import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  schedules: any = [
    {
      day: 'Lunes',
      hours: '8:00 - 16:00'
    },
    {
      day: 'Martes',
      hours: '8:00 - 16:00'
    },
    {
      day: 'Miércoles',
      hours: '8:00 - 16:00'
    },
    {
      day: 'Jueves',
      hours: '8:00 - 16:00'
    },
    {
      day: 'Viernes',
      hours: '8:00 - 15:00'
    },
    {
      day: 'Sábado',
      hours: '10:00 - 14:00'
    },
    {
      day: 'Domingo',
      hours: 'Cerrado'
    }
  ];




  constructor() { }

  ngOnInit(): void {

    const center: [number, number] = [-4.690091744293704, 36.659123593875336];

    mapboxgl.accessToken = environment.mapboxKey;
    var map = new mapboxgl.Map({
      container: 'divMap',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center,
      zoom: 12
    });

    const marker = new mapboxgl.Marker()
      .setLngLat(center)
      .addTo(map)
  }

}
