import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 

@Injectable()
export class ChatService {
  private baseURL:string = "https://api.dialogflow.com/v1/query?v=20150910";
  private token:string = "51f9efd1210446599ee0642bfa999006";

  constructor(private http:HttpClient) { }
   
  public getResponse(query: string){
    let data={
      lang:"en",
      sessionId:"123456",
      query:query
    }

    let headers = new HttpHeaders();
    headers.append('Authorization',`Bearer ${this.token}`);

    return this.http
      .post(`${this.baseURL}`,data,{headers: headers})
      // .map(res => {
      //   return res.json();
      // })
  }
  
}
