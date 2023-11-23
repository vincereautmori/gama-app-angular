import {CUSTOM_ELEMENTS_SCHEMA, DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DatePipe, registerLocaleData} from '@angular/common';
import {NgbAccordionModule, NgbDatepickerModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ReactiveFormsModule} from "@angular/forms";


import localePt from '@angular/common/locales/pt';
import {CurrencyMaskModule} from "ng2-currency-mask";
import {NgSelectModule} from "@ng-select/ng-select";
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import {CopComponent} from "./cop.component";
import {CopUpdateComponent} from "./cop-update.component";
import {CopDetailComponent} from "./cop-detail.component";
import {CopRoutingModule} from "./cop-routing.module";
import {NgxMaskDirective, NgxMaskPipe} from "ngx-mask";
registerLocaleData(localePt);


@NgModule({
  declarations: [CopComponent,
    CopUpdateComponent,
    CopDetailComponent
  ],
  imports: [
    CommonModule,
    NgxMaskDirective, NgxMaskPipe,
    NgbPaginationModule,
    NgbAccordionModule,
    ReactiveFormsModule,
    CopRoutingModule,
    NgbDatepickerModule,
    FontAwesomeModule,
    CurrencyMaskModule,
    NgSelectModule,
    NgbModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CopModule {
}
