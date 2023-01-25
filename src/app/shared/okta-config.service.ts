import { Injectable } from '@angular/core';
import { hasInteractionCode } from '@okta/okta-auth-js';


@Injectable({
  providedIn: 'root'
})
export class OktaConfigService {
  constructor() { }

  
    strBaseURI = 'https://panda.white-lions-den.com';
    strRedirectURL = 'https://192.168.1.225:4200/okta-test-siw-jan-2023/profile';
    strClientID = '0oa4vskjguQzH5WSo0x7';
    strIssuer='https://panda.white-lions-den.com/';
    strPostLogoutURL = 'https://192.168.1.225:4200/okta-test-siw-jan-2023/';
    strScope = ['openid', 'email', 'profile','groups'];
    strResponseType = ['token', 'id_token'];
    strResponseMode = 'fragment';
    strPrompt = 'login';
    strPkce = true;
    strLang = 'ja';
    strBrand = '#191919';
    strLogo = "assets/img/okta_logo_small.png";
    strMeEP = 'api/v1/users/me';


    strGitHubRepo = 'https://github.com/mortpanda/okta-test-siw-jan-2023/'

   


}

