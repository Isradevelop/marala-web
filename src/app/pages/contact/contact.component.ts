import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

import * as mapboxgl from 'mapbox-gl';
import { ApiService } from '../../services/api.service';

import 'animate.css';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public autoResize: boolean = true;

  constructor(private apiService: ApiService) {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {

    const center: [number, number] = [-4.690091744293704, 36.659123593875336];

    mapboxgl.accessToken = environment.mapboxKey;
    var map = new mapboxgl.Map({
      container: 'divMap',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center,
      zoom: 15
    });

    const marker = new mapboxgl.Marker()
      .setLngLat(center)
      .addTo(map)


    const tokenApi = this.apiService.getToken()
      .subscribe(token => {

      })

  }


}