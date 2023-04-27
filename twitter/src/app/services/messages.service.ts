import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private messages: string[] = ["abc","123"]
  createMessage(message:string){
    this.messages.push(message)
  }
  deleteMessage(message:string){
    this.messages.filter(item => item !== message)
  }
  getMessages(){
    return this.messages
  }
  clearMessages(){
    this.messages = []
  } 
  constructor() { }
}
