import { Component,Input } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {
  constructor(private service: MessagesService){}
  @Input() tweetMessage : string = ""
  deleteTweet(message: string){
    this.service.deleteMessage(message)
  }
  
}
