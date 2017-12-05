import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FwModule } from '../fw/fw.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { CountriesComponent } from './countries/countries.component';
import { appRoutes } from './app.routing';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        SettingsComponent,
        CountriesComponent,
        CountryDetailComponent,
        CountryListComponent,
        CountryMaintComponent,
        AuthenticatedUserComponent
    ],
    imports: [
        BrowserModule,
        FwModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
