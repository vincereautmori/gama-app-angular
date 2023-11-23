import {Injectable, NgModule} from '@angular/core';
import {Routes, RouterModule, Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import {OccurrenceComponent} from "./occurrence.component";
import {AuthGuard} from "../../service/auth-guard.service";
import {Occurrence} from "../model/occurrence.model";
import {EMPTY, flatMap, Observable, of} from "rxjs";
import {OccurrenceDetailComponent} from "./occurrence-detail.component";
import {OccurrenceService} from "../../service/occurrence.service";

@Injectable({providedIn: 'root'})
export class OccurrenceResolve implements Resolve<Occurrence> {
  constructor(private service: OccurrenceService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Occurrence> | Observable<never> {
    const id = route.params['id'];

     return this.service.getById(id);
  }
}

const routes: Routes = [
  { path: '', component: OccurrenceComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: ':id/view',
    component: OccurrenceDetailComponent,
    resolve: {
      occurrence: OccurrenceResolve
    },
    pathMatch: 'full', canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OccurrenceRoutingModule { }
