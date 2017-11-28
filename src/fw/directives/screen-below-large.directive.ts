import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { ScreenService } from '../services/screen.service';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[screenBelowLarge]' })
export class ScreenBelowLargeDirective {

    hasView = false;

    constructor(
        private viewContainer: ViewContainerRef,
        private template: TemplateRef<Object>,
        private screenService: ScreenService
    ) {
        this.screenService.resize$.subscribe(() => this.onResize());
    }

    @Input()
    set screenBelowLarge(condition) {
        condition = this.screenService.screenWidth < this.screenService.largeBreakpoint;

        if (condition && !this.hasView) {
            this.hasView = true;
            this.viewContainer.createEmbeddedView(this.template);
        } else if (!condition && this.hasView) {
            this.hasView = false;
            this.viewContainer.clear();
        }
    }

    onResize(): void {
        this.screenBelowLarge = false;
    }
}
