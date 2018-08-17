import {Component} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import * as dialogs from "ui/dialogs";
import * as jsSHA from "jssha";

@Component({
    selector: "list",
    templateUrl: "./components/list/list.xml",
})
export class ListComponent {

    router: Router;
    items: Array<Object>;
    shaObj: any;

    constructor(router: Router) {
        this.router = router;
        this.items = [];
        this.shaObj = new jsSHA("SHA-1", "TEXT");
    }

    save() {
        dialogs.prompt("Text to be hashed...", "").then(result => {
            if(result.text != "") {
                this.shaObj.update(result.text);
                this.items.push({text: result.text, hash: this.shaObj.getHash("HEX")});
            }
        });
    }

    navigateToAbout() {
        this.router.navigate(["About"]);
    }
}
