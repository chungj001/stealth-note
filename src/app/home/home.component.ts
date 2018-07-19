import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "../../../node_modules/@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    // go to browser and type http://localhost:4200/home2/6
    // alert(id);
  }
}
