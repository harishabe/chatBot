import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {

  constructor() { }
   user: string = "Harisha";

  getFirstUser() {
    return this.user;
  }

}
