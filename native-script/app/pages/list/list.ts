import { EventData } from "data/observable";
import { Page } from "ui/page";
import { ListModel } from "./list-view-model";
import * as FrameModule from "ui/frame";

export function navigatingTo(args: EventData) {
    var page = <Page>args.object;
    page.bindingContext = new ListModel();
}

export function navigateToAbout() {
    FrameModule.topmost().navigate({moduleName: "pages/about/about"});
}
