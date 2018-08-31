import { Component, AfterViewInit } from "@angular/core";
import { hasKey, getString, remove } from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import * as app from "application";

@Component({
    moduleId: module.id,
    selector: "sdk-app",
    template: `
        <page-router-outlet></page-router-outlet>
    `
})

export class AppComponent implements AfterViewInit {
    constructor(private router: RouterExtensions) { }

    ngAfterViewInit() {
        app.on(app.resumeEvent, (args: app.ApplicationEventData) => {
            this.router.navigate(['']);
        });
    }
}
