import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { ContentComponent } from './content/content.component';
import { FrameworkConfigService } from './services/framework-config.service';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ScreenService } from './services/screen.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FrameworkBodyComponent,
        TitleBarComponent,
        ContentComponent,
        TopBarComponent,
        StatusBarComponent
    ],
    providers: [
        FrameworkConfigService,
        ScreenService
    ],
    exports: [
        FrameworkBodyComponent
    ]
})
export class FwModule { }
