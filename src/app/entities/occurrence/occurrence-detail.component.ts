import {Component, ViewChild} from '@angular/core';
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {OccurrenceService} from "../../service/occurrence.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Occurrence} from "../model/occurrence.model";
import * as mapboxgl from "mapbox-gl";
@Component({
  selector: 'app-occurrence-detail',
  templateUrl: './occurrence-detail.component.html',
  styleUrls: ['./occurrence.component.scss']
})
export class OccurrenceDetailComponent {
  occurrence: Occurrence;
  lat = 51.678418;
  lng = 7.809007;

  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v11';

  constructor(private fb: FormBuilder, private occurrenceService: OccurrenceService, private router: Router, private route: ActivatedRoute) {
    this.occurrence = this.route.snapshot.data['occurrence'];

  }

  ngOnInit() {
    this.occurrence = this.route.snapshot.data['occurrence'];

    // @ts-ignore
    mapboxgl.accessToken = 'pk.eyJ1IjoiZW5nZW5oZWlyb3Nkb3RpIiwiYSI6ImNsMWJmYWl2YTAyMGczam9hamw5bWw5dWUifQ.fEdX9brp2Sgd3wpAO5jKNA';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.occurrence.longitude!, this.occurrence.latitude!]
    });

    const marker1 = new mapboxgl.Marker()
      .setLngLat([this.occurrence.longitude!, this.occurrence.latitude!])
      .addTo(this.map);
  }


  @ViewChild('form')
  form?: NgForm;


  cancel() {
    this.router.navigate(['/occurrences'])
  }
}
