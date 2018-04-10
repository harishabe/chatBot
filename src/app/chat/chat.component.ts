import { Component, OnInit } from '@angular/core';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messageTxt : String= "";
  message = [];
  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.sendMessage();
  }

  sendMessage() {
    this.message.push(this.messageTxt);
    this.messageTxt = "";
    //console.log('this.message',this.message);
    let value = 'uk';
    this.chatService.getResponse(value).subscribe(res => {
      console.log('res', res.result.fulfillment.speech);
    }, err => console.log(err))

    
  }

}
