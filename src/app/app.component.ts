import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  serverElements: any[] = [{ name: "test", content: "test" }];
  title = "Angular CLI Template";
  onServerElementAdded(newData) {
    this.serverElements.push({ name: newData.name, content: newData.content });
    console.log(this.serverElements);
    //console.log("new data" + newData);
    //console.log(this.serverElements);
  }
}
