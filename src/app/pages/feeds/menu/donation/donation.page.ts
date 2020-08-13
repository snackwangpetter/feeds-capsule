import { Component, OnInit, NgZone } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Events } from '@ionic/angular';
import { NativeService } from 'src/app/services/NativeService';
import { TranslateService } from "@ngx-translate/core";
import { FeedService } from 'src/app/services/FeedService';
import { PaypromptComponent } from 'src/app/components/payprompt/payprompt.component'

declare let titleBarManager: TitleBarPlugin.TitleBarManager;

@Component({
  selector: 'app-donation',
  templateUrl: './donation.page.html',
  styleUrls: ['./donation.page.scss'],
})
export class DonationPage implements OnInit {
  private connectionStatus = 1;
  private version = "v1.0.0";
  private elaAddress = "EYWDcCyp6czaqAKGiq4b7exhWJfVpbG2D9";
  private popover:any;
  constructor(
    private popoverController:PopoverController,
    private zone: NgZone,
    private native: NativeService,
    private translate:TranslateService,
    private events: Events,
    private feedService:FeedService,
    ) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.connectionStatus = this.feedService.getConnectionStatus();
    this.events.subscribe('feeds:connectionChanged',(status)=>{
      this.zone.run(() => {
        this.connectionStatus = status;
      });
    });

    this.events.subscribe("feeds:updateTitle",()=>{
      this.initTitle();
    });
  
  }

  ionViewDidEnter(){
    this.initTitle();
    this.native.setTitleBarBackKeyShown(true);
  }

  initTitle(){
    titleBarManager.setTitle(this.translate.instant("DonationPage.donation"));
  }
  

  ionViewWillLeave(){
    this.events.unsubscribe("feeds:connectionChanged");
    this.events.unsubscribe("feeds:updateTitle");
  }

  donation(){
    // alert("donation");

    // this.popup.ionicConfirm(this.translate.instant("common.prompt"),this.translate.instant('common.des1')+"0000000000"+"<br>"
    // +this.translate.instant('common.channel')+"11111111"+"<br>"+this.translate.instant('common.description')+"22222222",
    // this.translate.instant("common.ok"),this.translate.instant("common.cancel")).then((data)=>{
    //   if (data) {
    //     // this.feedService.createTopic(this.selectedServer.nodeId, name.value, desc.value, this.channelAvatar);
    //   }
    // });

    this.showPayPrompt(this.elaAddress);
  }


  async showPayPrompt(elaAddress:string) {

    this.popover = await this.popoverController.create({
      mode: 'ios',
      cssClass: 'genericPopup',
      component: PaypromptComponent,
      componentProps: {
        "elaAddress":elaAddress,
      }
    });
    this.popover.onWillDismiss().then(() => {
      this.popover = null;
    });
    return await this.popover.present();
  }
}