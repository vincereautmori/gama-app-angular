import {Injectable, NgModule} from '@angular/core';
import {Routes, RouterModule, Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import {ViolationComponent} from "./violation.component";
import {AuthGuard} from "../../service/auth-guard.service";
import {ViolationUpdateComponent} from "./violation-update.component";
import {Violation} from "../model/violation.model";
import {EMPTY, flatMap, Observable, of} from "rxjs";
import {ViolationDetailComponent} from "./violation-detail.component";
import {ViolationService} from "../../service/violation.service";

@Injectable({providedIn: 'root'})
export class ViolationResolve implements Resolve<Violation> {
  constructor(private service: ViolationService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Violation> | Observable<never> {
    const id = route.params['id'];

     return this.service.getById(id);
  }
}

const routes: Routes = [
  { path: '', component: ViolationComponent, pathMatch: 'full', canActivate: [AuthGuard]},

  { path: ':id/edit',
    component: ViolationUpdateComponent,
    resolve: {
      violation: ViolationResolve
    },
    pathMatch: 'full', canActivate: [AuthGuard]},

  { path: ':id/view',
    component: ViolationDetailComponent,
    resolve: {
      violation: ViolationResolve
    },
    pathMatch: 'full', canActivate: [AuthGuard]},

  { path: 'new', component: ViolationUpdateComponent, pathMatch: 'full', canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViolationRoutingModule { }
