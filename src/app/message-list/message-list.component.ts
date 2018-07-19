import { Component, OnInit } from "@angular/core";
import { MessageService } from "../message.service";
import { StealthMessage } from "../stealth-message";

@Component({
  selector: "app-message-list",
  templateUrl: "./message-list.component.html",
  styleUrls: ["./message-list.component.css"]
})
export class MessageListComponent implements OnInit {
  // array
  messages: StealthMessage[];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    // componenets are ready to go
    // this.messages = this.messageService.getMessages();
    this.messageService.getMessages().subscribe(data => (this.messages = data));
  }
}
