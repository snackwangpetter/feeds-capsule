import { Component, OnInit, NgZone,ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Events} from '@ionic/angular';
import { FeedService } from 'src/app/services/FeedService';
import { NativeService } from 'src/app/services/NativeService';
import { MenuService } from 'src/app/services/MenuService';
import { ThemeService } from 'src/app/services/theme.service';
import { TranslateService } from "@ngx-translate/core";
import { UtilService } from 'src/app/services/utilService';
import { IonInfiniteScroll,PopoverController} from '@ionic/angular';
import { EdittoolComponent } from '../../../../components/edittool/edittool.component';
declare let titleBarManager: TitleBarPlugin.TitleBarManager;

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.page.html',
  styleUrls: ['./postdetail.page.scss'],
})
export class PostdetailPage implements OnInit {
  @ViewChild(IonInfiniteScroll,{static:true}) infiniteScroll: IonInfiniteScroll;
  public images:any = {};
  public connectionStatus:number = 1;
  public nodeStatus:any ={};
  public avatar: string = "";

  public channelAvatar:string = "";
  public channelName:string = "";
  public channelWName:string ="";
  public channelOwner:string = "";
  public channelWOwner:string = "";
  public postContent:string = "";
  public postTS:number = 0;
  public likesNum:number = 0;
  public commentsNum:number = 0;
  
  public commentList:any = [];

  public nodeId:string = "";
  public channelId:number = 0;
  public postId:number = 0;
  public objStyle:any={"width":""};
  public startIndex:number = 0;
  public pageNumber:number = 5;
  public totalData:any = [];

  public popover: any;
  
  public postStatus = 0;
  constructor(
    private popoverController:PopoverController,
    private acRoute: ActivatedRoute,
    private events: Events,
    private zone: NgZone,
    private native: NativeService,
    private feedService :FeedService,
    public theme:ThemeService,
    private translate:TranslateService,
    private menuService: MenuService) {
     
  }

  initData(){
    this.initnodeStatus();
    let channel = this.feedService.getChannelFromId(this.nodeId, this.channelId) || "";
    if (channel == "")
      return ;
    this.channelWName = channel["name"] || "";
    this.channelName = UtilService.moreNanme(channel["name"]);
    this.channelAvatar = this.feedService.parseChannelAvatar(channel["avatar"]);
    this.channelWOwner = channel["owner_name"] || "";
    this.channelOwner = UtilService.moreNanme(channel["owner_name"],40);

    let post = this.feedService.getPostFromId(this.nodeId, this.channelId, this.postId);
  
 
    this.postStatus = post.post_status || 0;

    this.postContent = post.content;
    this.postTS = post.created_at;
    this.likesNum = post.likes;
    this.commentsNum = post.comments;
    this.initRefresh();
    //this.scrollToTop(1);
  }

  initRefresh(){
    this.totalData = this.feedService.getCommentList(this.nodeId, this.channelId, this.postId) || [];
    if(this.totalData.length-this.pageNumber > this.pageNumber){
      this.commentList = this.totalData.slice(this.startIndex,this.pageNumber);
      this.startIndex++;
      this.infiniteScroll.disabled =false;
    }else{
      this.commentList = this.totalData.slice(0,this.totalData.length);
      this.infiniteScroll.disabled =true;
    }
  }
  
  ngOnInit() {
    this.objStyle["width"] = (screen.width - 157)+"px"; 
    this.acRoute.params.subscribe((data)=>{
      this.nodeId = data.nodeId;
      this.channelId = data.channelId;
      this.postId = data.postId;
    });
  }

  ionViewWillEnter() {
    this.initTitle();
    this.native.setTitleBarBackKeyShown(true);
    
    this.initData();
    this.connectionStatus = this.feedService.getConnectionStatus();
    this.feedService.refreshPostById(this.nodeId,this.channelId,this.postId);

    if (this.connectionStatus == 0)
      this.feedService.updateComment(this.nodeId, Number(this.channelId) ,Number(this.postId));

    this.events.subscribe('feeds:connectionChanged',(status)=>{
      this.zone.run(() => {
        this.connectionStatus = status;
      });
    });
  

    this.events.subscribe('feeds:commentDataUpdate',()=>{
      this.zone.run(() => {
        this.startIndex = 0;
        this.initData();
      });
    });
    
  
    this.events.subscribe("feeds:friendConnectionChanged", (nodeId, status)=>{
      this.zone.run(()=>{
        this.nodeStatus[nodeId] = status;
      });
    });
    this.events.subscribe("feeds:updateTitle",()=>{
      if(this.menuService.postDetail!=null){
        this.menuService.hideActionSheet();
        this.menuMore();
      }
      this.initTitle();
    });
  
    this.events.subscribe("feeds:refreshPostDetail", ()=>{
      this.zone.run(() => {
        let post = this.feedService.getPostFromId(this.nodeId, this.channelId, this.postId);
        this.postContent = post.content;
        this.postTS = post.created_at;
        this.likesNum = post.likes;
        this.commentsNum = post.comments;  
      });
    });

    this.events.subscribe('feeds:editPostFinish', () => {
      this.initData();
    });

    this.events.subscribe('feeds:deletePostFinish', () => {
      this.events.publish("update:tab");
      this.native.hideLoading();
      this.initData();
    });

    this.events.subscribe('feeds:editCommentFinish', () => {
      this.initData();
    });
     
    this.events.subscribe('feeds:deleteCommentFinish', () => {
      this.native.hideLoading();
      this.initData();
    });

    this.events.subscribe('rpcRequest:error', () => {
      this.zone.run(() => {
         this.native.hideLoading();
      });
    });
  }


  ionViewWillLeave(){//清楚订阅事件代码
    this.events.unsubscribe("feeds:connectionChanged");
    this.events.unsubscribe("feeds:commentDataUpdate");
    this.events.unsubscribe("feeds:friendConnectionChanged");
    this.events.unsubscribe("feeds:updateTitle");
    this.events.unsubscribe("feeds:refreshPostDetail");
    this.events.unsubscribe("feeds:editPostFinish");
    this.events.unsubscribe("feeds:deletePostFinish");
    this.events.unsubscribe("feeds:editCommentFinish");
    this.events.unsubscribe("feeds:deleteCommentFinish");
    this.events.unsubscribe("rpcRequest:error");
    this.images = {};
    this.menuService.hideActionSheet();
    if(this.popover!=null){
      this.popover.dismiss();
    }
  }

  ionViewDidEnter() {
  }

 
  initTitle(){
    titleBarManager.setTitle(this.translate.instant("PostdetailPage.postview"));
  }

  getContentText(content: string): string{
    return this.feedService.parsePostContentText(content);
  }

  getContentImg(content: any): string{
    return this.feedService.parsePostContentImg(content);
  }

  indexText(text: string):string{
    return this.feedService.indexText(text,20,20);
  }

  showCommentPage(nodeId,channelId,postId){
    if(this.feedService.getConnectionStatus() != 0){
      this.native.toastWarn('common.connectionError');
      return;
    }

    this.native.navigateForward(["comment",nodeId,channelId,postId],"");
  }

  checkMyLike(){
    return this.feedService.checkMyLike(this.nodeId, Number(this.channelId), Number(this.postId));
  }

  checkLikedComment(commentId: number){
    return this.feedService.checkLikedComment(this.nodeId, Number(this.channelId), Number(this.postId), commentId);
  }

  like(){
    if(this.feedService.getConnectionStatus() != 0){
      this.native.toastWarn('common.connectionError');
      return;
    }

    if (this.checkMyLike()){
      this.feedService.postUnlike(this.nodeId,Number(this.channelId),Number(this.postId),0);
      return ;
    }

    this.feedService.postLike(this.nodeId,Number(this.channelId),Number(this.postId),0);
  }

  likeComment(commentId: number){
    if(this.feedService.getConnectionStatus() != 0){
      this.native.toastWarn('common.connectionError');
      return;
    }

    if (this.checkLikedComment(commentId)){
      this.feedService.postUnlike(this.nodeId,Number(this.channelId),Number(this.postId),commentId);
      return ;
    }

    this.feedService.postLike(this.nodeId,Number(this.channelId),Number(this.postId),commentId);
  }

  handleDisplayTime(createTime:number){
    let obj = UtilService.handleDisplayTime(createTime);
    if(obj.type === 's'){
      return this.translate.instant('common.just');
    }
    if(obj.type==='m'){
      if(obj.content === 1){
        return obj.content+this.translate.instant('HomePage.oneminuteAgo');
      }
      return obj.content+this.translate.instant('HomePage.minutesAgo');
    }
    if(obj.type==='h'){
      if(obj.content === 1){
        return obj.content+this.translate.instant('HomePage.onehourAgo');
      }
      return obj.content+this.translate.instant('HomePage.hoursAgo');
    }
    if(obj.type === 'day'){
      
      if(obj.content === 1){
        return this.translate.instant('common.yesterday');
      }
      return obj.content +this.translate.instant('HomePage.daysAgo');
    }
    return  obj.content;
  }

  menuMore(){
    let isMine = this.checkChannelIsMine();
    // console.log("isMine==>"+isMine);
    if(isMine === 0 && this.postStatus != 1){
      this.menuService.showPostDetailMenu(this.nodeId, Number(this.channelId), this.channelName,this.postId);
    }else{
      this.menuService.showShareMenu(this.nodeId, Number(this.channelId), this.channelName,this.postId);
    }
  }

  showBigImage(content: any){
    this.native.openViewer(content,"common.image","PostdetailPage.postview");
  }

 

  commentComment(){
    alert("TODO");
  }

  checkServerStatus(nodeId: string){
    return this.feedService.getServerStatusFromId(nodeId);
  }

  initnodeStatus(){
     let status = this.checkServerStatus(this.nodeId);
     this.nodeStatus[this.nodeId] = status;
  }

  getImage(nodeId,channelId,postId){
    let nodeChannelPostId = this.nodeId+this.channelId+this.postId;
    let img = this.images[nodeChannelPostId] || "";
    if (img == ""){
      this.images[nodeChannelPostId] = "undefine";
      this.feedService.loadPostContentImg(nodeChannelPostId).then((image)=>{
        this.images[nodeChannelPostId] = image||"none";
      }).catch(()=>{
        console.log("getImageError");
      })
    }

    return  this.images[nodeChannelPostId];
  }

  doRefresh(event:any){
    let sId =  setTimeout(() => {
      this.images = {};
      this.startIndex = 0;
      this.initData();
      event.target.complete();
      clearTimeout(sId);
    },500);
  }

  loadData(event:any){
    let sId = setTimeout(() => {
      let arr = [];        
      if(this.totalData.length - this.pageNumber*this.startIndex>this.pageNumber){
       arr = this.totalData.slice(this.startIndex*this.pageNumber,(this.startIndex+1)*this.pageNumber);
       this.startIndex++;
       this.zone.run(()=>{
       this.commentList = this.commentList.concat(arr);
       });
       this.initnodeStatus();
       event.target.complete();
      }else{
       arr = this.totalData.slice(this.startIndex*this.pageNumber,this.totalData.length);
       this.zone.run(()=>{
           this.commentList = this.commentList.concat(arr);
       });
       this.infiniteScroll.disabled =true;
       this.initnodeStatus();
       event.target.complete();
       clearTimeout(sId);
      }
    },500);

  
  }

  pressName(){
    if(this.channelWName!= "" && this.channelWName.length>15){
      this.native.createTip(this.channelWName);
    }
  }

  pressOwnerName(){
    if(this.channelWOwner!= "" && this.channelWOwner.length>40){
      this.native.createTip(this.channelWOwner);
    }
  }

  userName(userName:string){

    let name = userName || "";

    if(name!=""){
      this.native.createTip(name);
    }

  }

  async openEditTool(ev:any,comment:any) {
    this.popover = await this.popoverController.create({
      mode: 'ios',
      cssClass:'editToolPopup',
      component: EdittoolComponent,
      componentProps: { nodeId:comment.nodeId,
                        channelId:Number(comment.channel_id),
                        postId:Number(comment.post_id),
                        commentById:Number(comment.comment_id),
                        commentId:Number(comment.id),
                        content:comment.content
                      },
      event: ev,
      translucent: true
    });

    this.popover.onWillDismiss().then(()=>{
         if(this.popover!=null){
           this.popover = null;
         }
          
    })
    return await this.popover.present();
  }


  handleCommentStatus(){
    let status = "(edit)"
    return status;
  }

  checkChannelIsMine(){
    if (this.feedService.checkChannelIsMine(this.nodeId, this.channelId))
      return 0;
    
    return 1;
  }

  checkCommentIsMine(comment:any){
    return this.feedService.checkCommentIsMine(comment.nodeId,Number(comment.channel_id),Number(comment.post_id),Number(comment.id));
  }
}
