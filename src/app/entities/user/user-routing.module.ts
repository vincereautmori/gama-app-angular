import {Injectable, NgModule} from '@angular/core';
import {Routes, RouterModule, Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import {UserComponent} from "./user.component";
import {AuthGuard} from "../../service/auth-guard.service";
import {UserUpdateComponent} from "./user-update.component";
import {User} from "../model/user.model";
import {EMPTY, flatMap, Observable, of} from "rxjs";
import {UserDetailComponent} from "./user-detail.component";
import {UserService} from "../../service/user.service";

@Injectable({providedIn: 'root'})
export class UserResolve implements Resolve<User> {
  constructor(private service: UserService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> | Observable<never> {
    const id = route.params['id'];

     return this.service.getById(id);
  }
}

const routes: Routes = [
  { path: '', component: UserComponent, pathMatch: 'full', canActivate: [AuthGuard]},

  { path: ':id/edit',
    component: UserUpdateComponent,
    resolve: {
      user: UserResolve
    },
    pathMatch: 'full', canActivate: [AuthGuard]},

  { path: ':id/view',
    component: UserDetailComponent,
    resolve: {
      user: UserResolve
    },
    pathMatch: 'full', canActivate: [AuthGuard]},

  { path: 'new', component: UserUpdateComponent, pathMatch: 'full', canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
