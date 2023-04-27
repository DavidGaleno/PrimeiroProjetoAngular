import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})

export class NewPostComponent {
  constructor(private service: MessagesService){}
  sendTweet() { 
    this.service.createMessage(this.tweetMessage) 
    this.tweetMessage = "" 
    this.tweetRemainLength = this.tweetMaxLength
  }
  tweetMessage : string = ""
  tweetMaxLength: number = 140
  tweetRemainLength : number = this.tweetMaxLength
  changeRemainLength(){
    if(this.tweetMaxLength - this.tweetMessage.length < 0) return
    this.tweetRemainLength = this.tweetMaxLength - this.tweetMessage.length
  }  
}
