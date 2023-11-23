import {Component, ViewChild} from '@angular/core';
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../model/user.model";
import {CopService} from "../../service/cop.service";

@Component({
  selector: 'app-cop-detail',
  templateUrl: './cop-detail.component.html',
  styleUrls: ['./cop.component.scss']
})
export class CopDetailComponent {
  cop: User;

  constructor(private fb: FormBuilder, private copService: CopService, private router: Router, private route: ActivatedRoute) {
    this.cop = this.route.snapshot.data['cop'];

  }

  ngOnInit() {
    this.cop = this.route.snapshot.data['cop'];

  }

  @ViewChild('form')
  form?: NgForm;


  cancel() {
    this.router.navigate(['/cops'])
  }
}
