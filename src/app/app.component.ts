import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Location} from '@angular/common';
import {Router} from "@angular/router";
import {AuthService} from "./service/authentication.service";

const anonymousURLs = [
  // '', //
  // '/', //
  '/404', //
  '/login', //
  '/account/activate', //
  '/account/reset/request', //
  '/account/reset/finish'
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gama-admin';

  sidebarVisibility = true;

  constructor(private translate: TranslateService,private location: Location,private authService: AuthService,private router: Router) {
    translate.setDefaultLang('pt');
    translate.use('pt');

    if (
      (anonymousURLs.filter(url => !['', '/'].includes(url)).filter(url => this.location.path().endsWith(url)).length)
    ) {
      this.sidebarVisibility = false
    }

    router.events.subscribe((val) => {
      // see also
      if (
        (anonymousURLs.filter(url => !['', '/'].includes(url)).filter(url => this.location.path().endsWith(url)).length)
      ) {
        this.sidebarVisibility = false
      }
    });
  }

  isAuthenticated(): boolean {
    return this.authService.isLoggedIn()
  }
}
