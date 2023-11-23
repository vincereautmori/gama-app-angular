import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/authentication.service";
import {Cop} from "../model/cop.model";

@Component({
  selector: 'dm-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  inProduction?: boolean;
  error?: boolean;

  private loginVisibility = true;
  form:FormGroup;
  menuCollapse: any = {
    administration: false,
    profile: true,
    owners: true,
    clients: true,
    mobileApp: true,
    form: true,
    learning: true
  };

  private subscriptions: Subscription[] = [];

  constructor(
    private fb:FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  login() {
    const val = this.form.value;

    const user = {
      login: val.email,
      password: val.password
    } as Cop

    this.authService.login(user).subscribe(success => {
      if (success) {
        this.router.navigate(['/occurrences']);
      }
    },
      () => {
        this.error = true;
      })
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }
}
