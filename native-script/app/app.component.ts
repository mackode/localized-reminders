import { Component, AfterViewInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import * as app from "application";

@Component({
    moduleId: module.id,
    selector: "sdk-app",
    templateUrl: "app.component.html"
})

export class AppComponent implements AfterViewInit {
    constructor(private router: RouterExtensions) { }

    ngAfterViewInit() {
        app.on(app.resumeEvent, (args: app.ApplicationEventData) => {
            this.router.navigate(['']);
        });
    }
}
