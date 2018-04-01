import { Component, OnInit } from '@angular/core';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.sendMessage();
  }

  sendMessage() {
    alert('send');
    let value = 'HI';
    this.chatService.getResponse(value).subscribe(res => {
      console.log('res', res);
    }, err => console.log(err))
  }

}
