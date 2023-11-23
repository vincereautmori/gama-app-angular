import {Component, ViewChild} from '@angular/core';
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {AdminService} from "../../service/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../model/user.model";

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminDetailComponent {
  admin: User;

  constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router, private route: ActivatedRoute) {
    this.admin = this.route.snapshot.data['admin'];

  }

  ngOnInit() {
    this.admin = this.route.snapshot.data['admin'];

  }


  @ViewChild('form')
  form?: NgForm;


  cancel() {
    this.router.navigate(['/admins'])
  }
}
