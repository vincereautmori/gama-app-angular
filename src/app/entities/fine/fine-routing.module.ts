import {Injectable, NgModule} from '@angular/core';
import {Routes, RouterModule, Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import {FineComponent} from "./fine.component";
import {AuthGuard} from "../../service/auth-guard.service";
import {Fine} from "../model/fine.model";
import {EMPTY, flatMap, Observable, of} from "rxjs";
import {FineDetailComponent} from "./fine-detail.component";
import {FineService} from "../../service/fine.service";

@Injectable({providedIn: 'root'})
export class FineResolve implements Resolve<Fine> {
  constructor(private service: FineService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Fine> | Observable<never> {
    const id = route.params['id'];

     return this.service.getById(id);
  }
}

const routes: Routes = [
  { path: '', component: FineComponent, pathMatch: 'full', canActivate: [AuthGuard]},

  { path: ':id/view',
    component: FineDetailComponent,
    resolve: {
      fine: FineResolve
    },
    pathMatch: 'full', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FineRoutingModule { }
