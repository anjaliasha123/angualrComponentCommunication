import { Component, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"]
})
export class CockpitComponent implements OnInit {
  serverName: string = "";
  serverContent: string = "";
  element = { name: "", content: "" };
  @Output() evt = new EventEmitter<{
    name: string;
    content: string;
  }>();
  constructor() {}

  ngOnInit() {}
  onAddServerElement() {
    this.element.name = this.serverName;
    this.element.content = this.serverContent;
    this.evt.emit(this.element);
    //console.log(this.element);
  }
}
