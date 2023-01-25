import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ViewEncapsulation } from '@angular/core';
import { DockComponent } from '../app/shared/dock/dock.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  smallScreen: boolean;
  constructor(
    private primengConfig: PrimeNGConfig,
  ) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  // async Logout() {
  //   this.OktaSDKAuthService.OktaSDKAuthClient.signOut();
  // }

}


