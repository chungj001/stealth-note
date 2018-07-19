import { Injectable } from "@angular/core";
import { StealthMessage } from "./stealth-message";
// parameter
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  // para
  private url: string = "https://stealth-api-jv.herokuapp.com/message";

  // list of messages 0719
  // 0719 create two more items create list in nav bar
  messages: StealthMessage[] = [];

  // add a message ot the list, return nothing
  addMessage(message: StealthMessage): void {
    // psh the message onto the array
    // para comment out this.messages.push(message);
    // this.messages.push(message);
    // send message to the address
    this.http.post<StealthMessage>(this.url, message).subscribe();
  }

  // get a list of messages 0719
  // getMessages(): StealthMessage[] {
  //   //para
  //   // return this.messages;
  // }
  // para
  getMessages(): Observable<StealthMessage[]> {
    return this.http.get<StealthMessage[]>(this.url);
  }
  // import HttpClient class
  constructor(private http: HttpClient) {}
}
