import { Component, OnInit } from '@angular/core';
import { OktaWidgetService } from '../shared/okta-widget.service';
import { OktaConfigService } from '../shared/okta-config.service';
import { ViewEncapsulation } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OktaGetTokenService } from '../shared/okta-get-token.service';
import { OktaSDKAuthService } from '../shared/okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js'





@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent {
  strUserSession;
  strThisUser;
  public authService = new OktaAuth(this.OktaSDKAuthService.config);

  constructor(
    private OktaWidgetService: OktaWidgetService,
    private OktaConfigService: OktaConfigService,
    private OktaGetTokenService: OktaGetTokenService,
    private OktaSDKAuthService: OktaSDKAuthService,

  ) { }
  async ngOnInit() {
    await this.OktaWidgetService.CloseWidget();
    await this.OktaWidgetService.login(this.OktaConfigService.strRedirectURL);

    this.strUserSession = await this.authService.isAuthenticated();
    switch (this.strUserSession == true) {
      case false: {
        await this.OktaWidgetService.CloseWidget();
        await this.OktaWidgetService.login(this.OktaConfigService.strRedirectURL)
        break;
      }
      case true: {
        this.strThisUser = await this.authService.token.getUserInfo()
          .then(function (user) {
            return user
          })
          .catch((err) => {
            console.log(err);
            window.location.replace(this.OktaConfigService.strPostLogoutURL);
          })


        break;
      }
    }
  }

}
