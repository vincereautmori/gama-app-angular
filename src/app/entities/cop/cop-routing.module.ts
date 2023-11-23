import {Injectable, NgModule} from '@angular/core';
import {Routes, RouterModule, Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import {AuthGuard} from "../../service/auth-guard.service";
import {User} from "../model/user.model";
import {EMPTY, flatMap, Observable, of} from "rxjs";
import {HttpResponse} from "@angular/common/http";
import {UserService} from "../../service/user.service";
import {CopUpdateComponent} from "./cop-update.component";
import {CopDetailComponent} from "./cop-detail.component";
import {CopComponent} from "./cop.component";

@Injectable({providedIn: 'root'})
export class copResolve implements Resolve<User> {
  constructor(private service: UserService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> | Observable<never> {
    const id = route.params['id'];

     return this.service.getById(id);
  }
}

const routes: Routes = [
  { path: '', component: CopComponent, pathMatch: 'full', canActivate: [AuthGuard]},

  { path: ':id/edit',
    component: CopUpdateComponent,
    resolve: {
      cop: copResolve
    },
    pathMatch: 'full', canActivate: [AuthGuard]},

  { path: ':id/view',
    component: CopDetailComponent,
    resolve: {
      cop: copResolve
    },
    pathMatch: 'full', canActivate: [AuthGuard]},

  { path: 'new', component: CopUpdateComponent, pathMatch: 'full', canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CopRoutingModule { }
