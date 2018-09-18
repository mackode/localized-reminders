import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "./link";

let mainMenuLinks = [
    new Link("ActionBar", "/action-bar"),
    new Link("ActivityIndicator", "/activity-indicator"),
    new Link("Angular directives", "/angular-directives"),
    new Link("Animations", "/animations"),
    new Link("Button", "/button"),
    new Link("DatePicker", "/date-picker"),
    new Link("Dialogs", "/dialogs"),
    new Link("Layouts", "/layouts")
];

@Component({
    moduleId: module.id,
    templateUrl: "main.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        mainMenuLinks.sort(function (a, b) {
            let titleA = a.title.toUpperCase();
            let titleB = b.title.toUpperCase();
            return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
        });

        for (let i = 0; i < mainMenuLinks.length; i++) {
            this.links.push(mainMenuLinks[i]);
        }
    }

    fabTap = function(args) {
        console.log('tapped');
    }
}
