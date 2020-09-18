import { Component, OnInit, NgZone } from '@angular/core';
import { Events, Platform, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FeedService } from 'src/app/services/FeedService';
import { NativeService } from 'src/app/services/NativeService';
import { AppService } from 'src/app/services/AppService';
import { PopupProvider } from 'src/app/services/popup';
import { TranslateService } from "@ngx-translate/core";
import { ThemeService } from 'src/app/services/theme.service';
declare let titleBarManager: TitleBarPlugin.TitleBarManager;
declare let appManager: AppManagerPlugin.AppManager;
@Component({
  selector: 'page-add-server',
  templateUrl: 'add-server.html',
  styleUrls: ['add-server.scss'],
})

export class AddServerPage implements OnInit {
  public  connectionStatus = 1;
  public  address: string = '';
  
  public  buttonDisabled = false;
  
  public  name: string;
  public  owner: string;
  public  introduction: string;
  public  did: string;
  public  feedsUrl: string;

  constructor(
    private events: Events,
    private zone: NgZone,
    private acRoute: ActivatedRoute,
    private platform: Platform,
    private native: NativeService,
    private feedService: FeedService,
    private appService: AppService,
    private popup: PopupProvider,
    private loadingController: LoadingController,
    private translate:TranslateService,
    public theme: ThemeService
  ) {
      // this.acRoute.params.subscribe(data => {
      //   this.address = data.address;
      //   if (this.address == null ||
      //     this.address == undefined||
      //     this.address == '')
      //     return;
      //     this.zone.run(()=>{
      //       this.presentLoading();
      //     });
      //   this.queryServer();
      // });
    }
  

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.connectionStatus = this.feedService.getConnectionStatus();
    this.events.subscribe("feeds:updateTitle",()=>{
      this.initTitle();
    });

    this.events.subscribe('feeds:connectionChanged',(status)=>{
      this.zone.run(() => {
        this.connectionStatus = status;
      });
    });

    this.events.subscribe('feeds:updateServerList', ()=>{
      this.zone.run(() => {
          //this.native.pop();
          this.native.go('/menu/servers');
      });
    });
   }


  ionViewDidEnter() {
    this.initTitle();
    this.native.setTitleBarBackKeyShown(true);
  }

  ionViewWillLeave(){
    this.events.unsubscribe("feeds:connectionChanged");
    this.events.unsubscribe("feeds:updateTitle");
    this.events.unsubscribe("feeds:connectionChanged");
    this.events.unsubscribe("feeds:updateServerList");
  }

  initTitle(){
    titleBarManager.setTitle(this.translate.instant('AddServerPage.title'));
  }

  navToBack() {
    this.native.pop();
  }



  scanCode(){
    appManager.sendIntent("scanqrcode", {}, {}, (res) => {
      let result: string = res.result.scannedContent;
      this.checkValid(result);
  }, (err: any) => {
      console.error(err);
  });
  }

  alertError(error: string){
    alert (error);
  }
  
  // onChange(){
  //   this.queryServer();
  // }

  confirm(){
    this.checkValid(this.address);
  }

  checkValid(result: string){
    if (result.length < 54 ||
      !result.startsWith('feeds://')||
      !result.indexOf("did:elastos:")){
        this.native.toastWarn("AddServerPage.tipMsg");
        return ;
    }
    this.native.getNavCtrl().navigateForward(['/menu/servers/server-info', result,"0", false]);
  }



}
