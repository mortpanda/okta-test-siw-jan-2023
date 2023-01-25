import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { OktaSDKAuthService } from '../shared/okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js'
import { OktaConfigService } from "../shared/okta-config.service";
import { OktaGetTokenService } from '../shared/okta-get-token.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  constructor(
    private OktaGetTokenService: OktaGetTokenService,
    private OktaSDKAuthService: OktaSDKAuthService,
    private OktaConfigService: OktaConfigService,
  ) {
    this.myTokens = false;
  }

  public authService = new OktaAuth(this.OktaSDKAuthService.config);
  strUserSession;
  strThisUser;
  strFullName;
  myAccessToken;
  myIdToken;
  colTokens;
  myTokens;

  async ngOnInit() {
    this.strUserSession = await this.authService.isAuthenticated();
    switch (this.strUserSession == true) {
      case false:
        window.location.replace(this.OktaConfigService.strPostLogoutURL);
      case true: {
        ////////////////////////////////////////
        // user is logged in
        this.strThisUser = await this.authService.token.getUserInfo()
        this.myAccessToken = await this.OktaGetTokenService.GetAccessToken()
        this.myIdToken = await this.authService.tokenManager.getTokens()
        this.colTokens = await this.authService.tokenManager.getTokens();
        console.log(this.strThisUser)
        console.log(this.myAccessToken)
        console.log(this.myIdToken.idToken)
        this.myTokens = await true;
        try {
        } catch (e) {

        }

        break;
      }
    }
  }

}
