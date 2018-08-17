import {Observable} from "data/observable";
import {ObservableArray} from 'data/observable-array';
import * as dialogs from "ui/dialogs";
import * as jsSHA from "jssha";

export class ListModel extends Observable {

    items: ObservableArray<Object>;
    shaObj: any;

    constructor() {
        super();
        this.items = new ObservableArray("[]");
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
}
