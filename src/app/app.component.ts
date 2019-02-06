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
    },
    {
      title: 'Date e Time',
      url: '/date-time',
      icon: 'arrow-dropright'
    },
    {
      title: 'FAB',
      url: '/fab',
      icon: 'arrow-dropright'
    },
    {
      title: 'Inputs',
      url: '/inputs',
      icon: 'arrow-dropright'
    },
    {
      title: 'Textarea',
      url: '/textarea',
      icon: 'arrow-dropright'
    },
    {
      title: 'Itens',
      url: '/itens',
      icon: 'arrow-dropright'
    },
    {
      title: 'Grid',
      url: '/grid',
      icon: 'arrow-dropright'
    },
    {
      title: 'Images e Avatar',
      url: '/images-avatar',
      icon: 'arrow-dropright'
    },
    {
      title: 'Splitepane e Menu',
      url: '/splitpane-menu',
      icon: 'arrow-dropright'
    },
    {
      title: 'Modal',
      url: '/modal',
      icon: 'arrow-dropright'
    },
    {
      title: 'Navegação',
      url: '/navegacao',
      icon: 'arrow-dropright'
    },
    {
      title: 'Popover',
      url: '/popover',
      icon: 'arrow-dropright'
    },
    {
      title: 'Loading',
      url: '/loading',
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
