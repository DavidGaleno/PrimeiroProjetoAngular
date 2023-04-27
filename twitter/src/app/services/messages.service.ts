import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private messages: string[] = ["abc", "123"]
  createMessage(message: string) {
    if (message === "" || !message.trim()) return
    this.messages.push(message)
  }
  deleteMessage(message: string) {
    this.messages.splice(this.messages.indexOf(message),1)
  }
  getMessages() {
    return this.messages
  }
  clearMessages() {
    this.messages.length = 0
  }
  constructor() { }
}
