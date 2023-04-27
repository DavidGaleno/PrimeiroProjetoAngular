import { Component } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})

export class NewPostComponent {
  sendTweet() {
    alert("Sent")
  }
  tweetMessage : string = ""
  tweetMaxLength: number = 140
  tweetRemainLength : number = this.tweetMaxLength
  changeRemainLength(){
    if(this.tweetRemainLength === 0) return
    this.tweetRemainLength = this.tweetMaxLength - this.tweetMessage.length
  }
}
