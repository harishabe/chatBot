import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef  } from '@angular/core';
//import { Message } from '../models/message'
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages = [];
  userMsg = { "sent": '' };
  errorMsg = '';

  // Code for Scrolling
  @ViewChild('chatlist', { read: ElementRef }) chatList: ElementRef;
  @ViewChildren(ChatComponent, { read: ElementRef }) chatItems: QueryList<ChatComponent>;

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    //this.sendMessage();
  }

  ngAfterViewInit() {
    this.chatItems.changes.subscribe(elements => {
      this.scrollToBottom();
    });
  }

  sendMessage() {
    if (this.userMsg.sent !== '') {
      this.errorMsg = '';
      this.messages.push({ "sent": this.userMsg.sent });
      this.chatService.getResponse(this.userMsg["sent"]).subscribe(res => {
        this.messages.push({ "replies": res.result.fulfillment.speech });
        console.log('this.messages', this.messages);
      }, err => console.log(err));
    } else {
      this.errorMsg = 'Please Enter Text';
    }
  }

  private scrollToBottom(): void {
    try {
      this.chatList.nativeElement.scrollTop = this.chatList.nativeElement.scrollHeight;
    }
    catch (err) {
      console.log('Could not find the "chatList" element.');
    }
  }

}
