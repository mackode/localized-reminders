import {Component} from "@angular/core";
import {RouteConfig} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";

import {ListComponent} from "./components/list/list.component";
import {AboutComponent} from "./components/about/about.component";

@Component({
    selector: "my-app",
    directives: [NS_ROUTER_DIRECTIVES],
    providers: [NS_ROUTER_PROVIDERS],
    template: "<page-router-outlet></page-router-outlet>"
})

@RouteConfig([
    { path: "/list", component: ListComponent, name: "List", useAsDefault: true },
    { path: "/about", component: AboutComponent, name: "About" },
])
export class AppComponent {

}
