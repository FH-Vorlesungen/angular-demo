import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AsyncPipe} from '@angular/common';
import {OAuthService} from "angular-oauth2-oidc";
import {authCodeFlowConfig} from "./auth/auth.config";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private oauthService = inject(OAuthService)
  constructor() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.initLoginFlow();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

}
