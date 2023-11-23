import {Component, ViewChild} from '@angular/core';
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {ViolationService} from "../../service/violation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Violation} from "../model/violation.model";

@Component({
  selector: 'app-violation-detail',
  templateUrl: './violation-detail.component.html',
  styleUrls: ['./violation.component.scss']
})
export class ViolationDetailComponent {
  violation: Violation;

  constructor(private fb: FormBuilder, private violationService: ViolationService, private router: Router, private route: ActivatedRoute) {
    this.violation = this.route.snapshot.data['violation'];

  }

  ngOnInit() {
    this.violation = this.route.snapshot.data['violation'];

  }


  @ViewChild('form')
  form?: NgForm;


  cancel() {
    this.router.navigate(['/violations'])
  }
}
