import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/FeedService';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor(private feedService: FeedService) { }

  ngOnInit() {
  }

  generateTempId(){
    this.feedService.generateTempPostId();
  }

  deleteTempId(){
    this.feedService.deleteTempPostId(-1);
  }
  
}
