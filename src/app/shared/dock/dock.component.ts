import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { OktaSDKAuthService } from '../okta-auth.service';
import { OktaConfigService } from '../okta-config.service';
import { MenuItem } from 'primeng/api';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DockComponent implements OnInit {
  toolbarItems: MenuItem[];

  constructor(
    private OktaSDKAuthService: OktaSDKAuthService,
    private OktaConfigService:OktaConfigService,
  ) { this.toolbarItems = this.mainDockItems; }

  mainDockItems = [
    {
      tooltipOptions: {
        // tooltipLabel: "Home",
      },
      icon: "pi pi-home",
      style: 'font-size: 1.5rem;',
      command: () => {
        this.GoTo(this.OktaConfigService.strPostLogoutURL);
      }
    },
    {
      tooltipOptions: {
        // tooltipLabel: "Logout",
      },
      icon: "pi pi-sign-out",
      style: 'font-size: 1.5rem;',
      command: () => {
        this.Logout();
      }
    },
  ]

  GoTo(uri) {
    window.location.replace(uri);
  }

  Logout() {
    this.OktaSDKAuthService.OktaSDKAuthClient.signOut();
  }

  ngOnInit(): void {

  }

}
