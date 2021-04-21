import { NgModule, ErrorHandler,Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Animation } from '@ionic/core';

import { Clipboard } from '@ionic-native/clipboard/ngx';

import { MyApp } from './app.component';
import { ComponentsModule } from './components/components.module';

import { TranslateLoader, TranslateModule,TranslateService} from '@ngx-translate/core';
import { Observable } from 'rxjs';
import {zh} from './../assets/i18n/zh';
import {en} from './../assets/i18n/en';
import {fr} from './../assets/i18n/fr';

/*
import { AboutPage } from './pages/about/about';
import { ContactPage } from './pages/contact/contact';
import { HomePage } from './pages/home/home';
import { TabsPage } from './pages/tabs/tabs';
*/
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { CarrierService } from './services/CarrierService';
import { NativeService } from './services/NativeService';
import { FeedService } from './services/FeedService';
import { StorageService } from './services/StorageService';
import { JsonRPCService } from './services/JsonRPCService';
// import { TransportService } from './services/TransportService';
import { AppService } from './services/AppService';
import { ThemeService } from './services/theme.service';
import { ConnectionService } from './services/ConnectionService';
import { HttpService } from './services/HttpService';
import { IntentService } from './services/IntentService';

import { PopupProvider } from './services/popup';
import { CameraService } from './services/CameraService';
import { QRCodeModule } from 'angularx-qrcode';
import { SplashscreenPageModule } from './pages/splashscreen/splashscreen.module';
import { JWTMessageService } from './services/JWTMessageService';
import { TransportService } from './services/TransportService';
import { SerializeDataService } from './services/SerializeDataService';
import { MenuService } from './services/MenuService';
import { FormatInfoService } from './services/FormatInfoService';
import { SessionService } from './services/SessionService';
import { LogUtils } from 'src/app/services/LogUtils';
import { StandardAuthService } from 'src/app/services/StandardAuthService';
import { AddFeedService } from 'src/app/services/AddFeedService';
import { FileService } from 'src/app/services/FileService';
import { FileHelperService } from 'src/app/services/FileHelperService';
import { DataHelper } from 'src/app/services/DataHelper';
import { ViewHelper } from 'src/app/services/viewhelper.service';
import { TitleBarService } from 'src/app/services/TitleBarService';
import { IonicStorageModule } from '@ionic/storage';

import { VideoEditor } from '@ionic-native/video-editor/ngx';
import { RewriteFrames } from '@sentry/integrations';

import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://4196003a1c864f5798dd2be18be5cb48@o339076.ingest.sentry.io/5524842",
  release: "1.5.5",
  integrations: [
    new RewriteFrames(),
  ]
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor(private popup: PopupProvider) { }

  handleError(error) {

    // Only send reports to sentry if we are not debugging.
    if (document.URL.includes('io.trinity-tech.dapp.feeds')) { // Prod builds or --nodebug CLI builds use the app package id instead of a local IP
        /*const eventId = */ Sentry.captureException(error.originalError || error);
      //Sentry.showReportDialog({ eventId });
    }

    this.popup.ionicAlert1(
      "Error",
      "Sorry, the application encountered an error. This has been reported to the team.",
      "Close"
    );
  }
}


export class WebpackTranslateLoader implements TranslateLoader {
  public getTranslation(lang: string): Observable<any> {
    return Observable.create(observer => {
      observer.next(lang);
      switch (lang) {
        case 'zh':
          observer.next(zh);
          break;
        case 'fr':
          observer.next(fr);
          break;
        case 'en':
          observer.next(en);
          break;
        default:
          observer.next(en);
      }
      observer.complete();
    });
  }
}

export function TranslateLoaderFactory() {
  return new WebpackTranslateLoader();
}

//TODO animation
// export function anim(AnimationC: Animation, baseEl: any, position?: any): Promise<Animation> {
//   const baseAnimation = new AnimationC();
//   const hostEl = (baseEl.host || baseEl) as HTMLElement;
//   const wrapperAnimation = new AnimationC();
//   const wrapperAnimation2 = new AnimationC();
//   if (position.direction == "forward") {
//   wrapperAnimation.addElement(position.enteringEl);
//   wrapperAnimation.fromTo('transform', `translateX(100%)`, 'translateX(0px)');
//   wrapperAnimation.fromTo('opacity', 1, 1);
//   }

//   if (position.direction == "back") {
//   wrapperAnimation.addElement(position.leavingEl);
//   wrapperAnimation.fromTo('transform', `translateX(0)`, 'translateX(100%)');
//   wrapperAnimation.fromTo('opacity', 1, 0.3);

//   wrapperAnimation2.addElement(position.enteringEl);
//   wrapperAnimation2.fromTo('transform', `translateX(0)`, 'translateX(0)');
//   wrapperAnimation2.fromTo('opacity', 1, 1);
//   }
//   return Promise.resolve(baseAnimation
//   .addElement(hostEl)
//   .easing('cubic-bezier(.36,.66,.04,1)')
//   .duration(800)
//   .add(wrapperAnimation)
//   .add(wrapperAnimation2));
// }

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    NgxIonicImageViewerModule,
    QRCodeModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    SplashscreenPageModule,
    IonicModule.forRoot({
      rippleEffect: true,
      mode: 'ios',
      //TODO animation
      // navAnimation: anim,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory:(TranslateLoaderFactory)
      }
    }),
    IonicStorageModule.forRoot(
      {
        name: 'feedsdb',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
      }
    )
  ],
  bootstrap: [MyApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    VideoEditor,
    StatusBar,
    SplashScreen,
    Platform,
    Clipboard,
    CarrierService,
    NativeService,
    SessionService,
    FeedService,
    TranslateService,
    ThemeService,
    JsonRPCService,
    // TransportService,
    InAppBrowser,
    StorageService,
    PopupProvider,
    AppService,
    CameraService,
    JWTMessageService,
    TransportService,
    SerializeDataService,
    MenuService,
    FormatInfoService,
    ConnectionService,
    HttpService,
    AddFeedService,
    LogUtils,
    StandardAuthService,
    FileService,
    FileHelperService,
    IntentService,
    DataHelper,
    ViewHelper,
    TitleBarService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: ErrorHandler, useClass: ErrorHandler}
  ]
})
export class AppModule {}
