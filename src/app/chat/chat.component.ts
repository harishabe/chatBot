import { Component, OnInit } from '@angular/core';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user:string;
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.user = this.chatService.getFirstUser();
  }

}
