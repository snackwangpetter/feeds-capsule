import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FeedService } from '../../services/FeedService';
import { NativeService } from '../../services/NativeService';
import { Events} from '@ionic/angular';
import { AppService } from '../../services/AppService';
import { TitleBarService } from 'src/app/services/TitleBarService';
import { TitleBarComponent } from 'src/app/components/titlebar/titlebar.component';

@Component({
  selector: 'app-editimage',
  templateUrl: './editimage.page.html',
  styleUrls: ['./editimage.page.scss'],
})
export class EditimagePage implements OnInit {
  @ViewChild(TitleBarComponent, { static: true }) titleBar: TitleBarComponent;
  public headPortrait:string ="";
  public croppedImage:string="";
  constructor(
    private feedService:FeedService,
    private nativeService:NativeService,
    private events:Events,
    private appService:AppService,
    private titleBarService: TitleBarService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.events.subscribe(FeedsEvent.PublishType.editImages,()=>{
      this.finish();
    });
    this.appService.hideright();
    this.titleBarService.setIcon(this.titleBar, FeedsData.TitleBarIconSlot.INNER_RIGHT, "editImages", "assets/icon/yes.ico");
    this.headPortrait = this.feedService.getClipProfileIamge();
  }

  ionViewWillLeave(){
    this.events.unsubscribe(FeedsEvent.PublishType.editImages);
    this.appService.addright();
    this.titleBarService.setIcon(this.titleBar, FeedsData.TitleBarIconSlot.INNER_RIGHT, null, null);
    let croppedImage = this.feedService.getClipProfileIamge();
    if(this.headPortrait === croppedImage){
      this.feedService.setClipProfileIamge("");
    }

  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  finish(){
    this.feedService.setClipProfileIamge(this.croppedImage);
    this.nativeService.pop();
  }

}
