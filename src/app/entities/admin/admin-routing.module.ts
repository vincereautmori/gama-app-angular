import {Injectable, NgModule} from '@angular/core';
import {Routes, RouterModule, Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AuthGuard} from "../../service/auth-guard.service";
import {AdminUpdateComponent} from "./admin-update.component";
import {User} from "../model/user.model";
import {AdminService} from "../../service/admin.service";
import {EMPTY, flatMap, Observable, of} from "rxjs";
import {HttpResponse} from "@angular/common/http";
import {UserService} from "../../service/user.service";
import {AdminDetailComponent} from "./admin-detail.component";

@Injectable({providedIn: 'root'})
export class AdminResolve implements Resolve<User> {
  constructor(private service: UserService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> | Observable<never> {
    const id = route.params['id'];

     return this.service.getById(id);
  }
}

const routes: Routes = [
  { path: '', component: AdminComponent, pathMatch: 'full', canActivate: [AuthGuard]},

  { path: ':id/edit',
    component: AdminUpdateComponent,
    resolve: {
      admin: AdminResolve
    },
    pathMatch: 'full', canActivate: [AuthGuard]},

  { path: ':id/view',
    component: AdminDetailComponent,
    resolve: {
      admin: AdminResolve
    },
    pathMatch: 'full', canActivate: [AuthGuard]},

  { path: 'new', component: AdminUpdateComponent, pathMatch: 'full', canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
