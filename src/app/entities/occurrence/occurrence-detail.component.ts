import {Component, ViewChild} from '@angular/core';
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {OccurrenceService} from "../../service/occurrence.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Occurrence} from "../model/occurrence.model";
import * as mapboxgl from "mapbox-gl";
import {FileService} from "../../service/file.service";
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: 'app-occurrence-detail',
  templateUrl: './occurrence-detail.component.html',
  styleUrls: ['./occurrence.component.scss']
})
export class OccurrenceDetailComponent {
  occurrence: Occurrence;
  lat = 51.678418;
  lng = 7.809007;

  image: any;

  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v11';

  constructor(private fb: FormBuilder, private occurrenceService: OccurrenceService, private router: Router, private route: ActivatedRoute,
              private fileService: FileService,  private sanitizer: DomSanitizer) {
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

    this.fileService.get(this.occurrence.imageUrl!).subscribe(blob  => {
      this.image = this.sanitize('data:image/jpg;base64, ' + this._arrayBufferToBase64(blob))
    })

    const marker1 = new mapboxgl.Marker()
      .setLngLat([this.occurrence.longitude!, this.occurrence.latitude!])
      .addTo(this.map);
  }

  sanitize( url:string ) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  _arrayBufferToBase64( buffer: any )  {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
  }


  @ViewChild('form')
  form?: NgForm;


  cancel() {
    this.router.navigate(['/occurrences'])
  }
}
