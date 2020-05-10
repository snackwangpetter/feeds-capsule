import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/FeedService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  private types = ["Details","MyFeeds","Following","Likes"];
  private selectType: String = "Details"; 

  private name: string = "";
  slideOpts = {
    initialSlide: 1,
    speed: 100,
    slidesPerView: 4,
  };

  constructor(
    private feedService: FeedService) {
    let signInData = this.feedService.getSignInData();
    this.name = signInData.name;
  }

  ngOnInit() {
  }

  changeType(type){
    this.selectType = type;
  }
}
