import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message'
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public message: Message;
  public messages: Message[];
  constructor(private chatService: ChatService) {
    this.message = new Message('', 'assets/images/user.png', new Date());
    this.messages = [
      new Message('Welcome to chatbot universe', 'assets/images/bot.png', new Date())
    ];
  }

  ngOnInit() {
    this.sendMessage();
  }

  sendMessage() {
    this.message["timestamp"] = new Date();
    this.messages.push(this.message);
    this.chatService.getResponse(this.message["content"]).subscribe(res => {
      this.messages.push(
        new Message(res.result.fulfillment.speech, 'assets/images/bot.png', res.timestamp)
      );
    }, err => console.log(err))
    this.message = new Message('', 'assets/images/user.png', new Date);
  }
}
