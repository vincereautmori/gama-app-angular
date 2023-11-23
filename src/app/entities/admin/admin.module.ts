import {CUSTOM_ELEMENTS_SCHEMA, DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DatePipe, registerLocaleData} from '@angular/common';
import {NgbAccordionModule, NgbDatepickerModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ReactiveFormsModule} from "@angular/forms";


import localePt from '@angular/common/locales/pt';
import {CurrencyMaskModule} from "ng2-currency-mask";
import {NgSelectModule} from "@ng-select/ng-select";
import {AdminComponent} from "./admin.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminUpdateComponent} from "./admin-update.component";
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import {AdminDetailComponent} from "./admin-detail.component";
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from "ngx-mask";
registerLocaleData(localePt);


@NgModule({
  declarations: [AdminComponent,
    AdminUpdateComponent,
    AdminDetailComponent
  ],
  imports: [
    NgxMaskDirective, NgxMaskPipe,
    CommonModule,
    NgbPaginationModule,
    NgbAccordionModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    NgbDatepickerModule,
    FontAwesomeModule,
    CurrencyMaskModule,
    NgSelectModule,
    NgbModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideNgxMask(),
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class AdminModule {
}
