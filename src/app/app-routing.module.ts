import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {sidebarRoute} from "./entities/sidebar/sidebar.route";
import {LoginComponent} from "./entities/login/login.component";
import {AdminModule} from "./entities/admin/admin.module";

const routes: Routes = []

const LAYOUT_ROUTES = [sidebarRoute];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'occurrences',
      loadChildren: () => import('./entities/occurrence/occurrence.module').then(m => m.OccurrenceModule)
    },
    {
      path: 'cops',
      loadChildren: () => import('./entities/cop/cop.module').then(m => m.CopModule)

    },
    {
      path: 'admins',
      loadChildren: () => import('./entities/admin/admin.module').then(m => m.AdminModule)

    },
    {
      path: 'fines',
      loadChildren: () => import('./entities/fine/fine.module').then(m => m.FineModule)
    },
    {
      path: 'users',
      loadChildren: () => import('./entities/user/user.module').then(m => m.UserModule)
    },
    {
      path: 'violations',
      loadChildren: () => import('./entities/violation/violation.module').then(m => m.ViolationModule)
    },
    {
      path: 'login',
      component: LoginComponent
    },
    ...LAYOUT_ROUTES
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
