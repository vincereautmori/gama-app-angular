import {Component, ViewChild} from '@angular/core';
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../model/user.model";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserDetailComponent {
  user: User;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.user = this.route.snapshot.data['user'];

  }

  ngOnInit() {
    this.user = this.route.snapshot.data['user'];

  }


  @ViewChild('form')
  form?: NgForm;


  cancel() {
    this.router.navigate(['/users'])
  }
}
