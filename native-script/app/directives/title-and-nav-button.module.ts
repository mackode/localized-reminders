import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { TitleDirective } from "./title.directive";
import { ToggleNavButtonDirective } from "./toggle-nav-button.directive";

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [TitleDirective, ToggleNavButtonDirective],
    exports: [TitleDirective, ToggleNavButtonDirective]
})

export class TitleAndNavButtonModule {

}
