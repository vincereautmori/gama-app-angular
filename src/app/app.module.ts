import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {SidebarComponent} from "./entities/sidebar/sidebar.component";
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";

import {fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {ReactiveFormsModule} from "@angular/forms";
import {CurrencyMaskModule} from 'ng2-currency-mask';

import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslationService} from "./service/translation.service";
import {OccurrenceModule} from "./entities/occurrence/occurrence.module";
import {LoginComponent} from "./entities/login/login.component";
import {TokenInterceptor} from "./service/token-interceptor.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {GenericModalComponent} from "./shared/modal/generic-modal.component";
import {DateMomentPipe} from "./shared/date-moment.pipe";
import {NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask, provideNgxMask} from "ngx-mask";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GenericModalComponent,
    SidebarComponent,
    DateMomentPipe
  ],
  imports: [
    BrowserModule,
    NgxMaskDirective, NgxMaskPipe,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    CurrencyMaskModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    OccurrenceModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgbAlertModule
  ],
  exports: [DateMomentPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [TranslationService,
    provideEnvironmentNgxMask(),
    provideNgxMask(),
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconLibrary: FaIconLibrary) {
    // @ts-ignore
    iconLibrary.addIconPacks(fas, fab);
    // iconLibrary.addIconPacks(fab);
  }
}

