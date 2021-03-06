import { Directive, ViewContainerRef, TemplateRef, Input, OnDestroy } from '@angular/core';
import { ScreenService } from '../services/screen.service';
import { Subscription } from 'rxjs/Subscription';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[screenLarge]' })
export class ScreenLargeDirective implements OnDestroy {

    private hasView = false;
    private screenSubscription: Subscription;

    constructor(
        private viewContainer: ViewContainerRef,
        private template: TemplateRef<Object>,
        private screenService: ScreenService
    ) {
        this.screenSubscription = this.screenService.resize$.subscribe(() => this.onResize());
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

    ngOnDestroy() {
        this.screenSubscription.unsubscribe();
    }
}
