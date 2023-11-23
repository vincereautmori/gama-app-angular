import {Component, Sanitizer, ViewChild} from '@angular/core';
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {FineService} from "../../service/fine.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Fine} from "../model/fine.model";
import * as mapboxgl from "mapbox-gl";
import {FileService} from "../../service/file.service";
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-fine-detail',
  templateUrl: './fine-detail.component.html',
  styleUrls: ['./fine.component.scss']
})
export class FineDetailComponent {
  fine: Fine;
  image: any;
  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v11';

  constructor(private fb: FormBuilder, private fineService: FineService,
              private fileService: FileService, private router: Router, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.fine = this.route.snapshot.data['fine'];

  }

  ngOnInit() {
    this.fine = this.route.snapshot.data['fine'];

    // @ts-ignore
    mapboxgl.accessToken = 'pk.eyJ1IjoiZW5nZW5oZWlyb3Nkb3RpIiwiYSI6ImNsMWJmYWl2YTAyMGczam9hamw5bWw5dWUifQ.fEdX9brp2Sgd3wpAO5jKNA';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.fine.longitude!, this.fine.latitude!]
    });

    this.fileService.get(this.fine.imageUrl!).subscribe(blob  => {
      this.image = this.sanitize('data:image/jpg;base64, ' + this._arrayBufferToBase64(blob))
    })



    const marker1 = new mapboxgl.Marker()
      .setLngLat([this.fine.longitude!, this.fine.latitude!])
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
    this.router.navigate(['/fines'])
  }
}
