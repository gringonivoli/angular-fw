import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { ScreenService } from '../services/screen.service';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[screenLarge]' })
export class ScreenLargeDirective {

    private hasView = false;

    constructor(
        private viewContainer: ViewContainerRef,
        private template: TemplateRef<Object>,
        private screenService: ScreenService
    ) {
        this.screenService.resize$.subscribe(() => this.onResize());
    }

    @Input()
    set screenLarge(condition) {
        condition = this.screenService.screenWidth >= this.screenService.largeBreakpoint;

        if (condition && !this.hasView) {
            this.hasView = true;
            this.viewContainer.createEmbeddedView(this.template);
        } else if (!condition && this.hasView) {
            this.hasView = false;
            this.viewContainer.clear();
        }
    }

    onResize(): void {
        this.screenLarge = false;
    }
}
