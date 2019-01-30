import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Action Sheet',
      url: '/action-sheet',
      icon: 'arrow-dropright'
    },
    {
      title: 'Alert',
      url: '/alert',
      icon: 'arrow-dropright'
    },
    {
      title: 'Badge',
      url: '/badge',
      icon: 'arrow-dropright'
    },
    {
      title: 'Buttons',
      url: '/buttons',
      icon: 'arrow-dropright'
    },
    {
      title: 'Cards',
      url: '/cards',
      icon: 'arrow-dropright'
    },
    {
      title: 'Checkbox',
      url: '/checkbox',
      icon: 'arrow-dropright'
    },
    {
      title: 'Chip',
      url: '/chip',
      icon: 'arrow-dropright'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
