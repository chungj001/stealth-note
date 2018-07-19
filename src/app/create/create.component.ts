import { Component, OnInit } from "@angular/core";
import { StealthMessage } from "../stealth-message";
import { MessageService } from "../message.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  // property
  // title: string;
  // message: string;
  // this afternoon comment out these two lines above
  message: StealthMessage = new StealthMessage();

  onSubmit(): void {
    // alert("YHO");
    this.MessageService.addMessage(this.message);
  }

  constructor(private MessageService: MessageService) {}

  ngOnInit() {}
}
