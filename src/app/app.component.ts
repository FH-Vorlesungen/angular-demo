import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AsyncPipe} from '@angular/common';
import {OAuthService} from 'angular-oauth2-oidc';
import {authCodeFlowConfig} from './auth/auth.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  private oauthService = inject(OAuthService);

  ngOnInit(): void {
    this.oauthService.setStorage(localStorage)
    if (!this.oauthService.hasValidAccessToken()) {
      this.oauthService.configure(authCodeFlowConfig);
      this.oauthService.loadDiscoveryDocumentAndLogin();
    }
  }


}
