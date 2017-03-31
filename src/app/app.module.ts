import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule.withServerTransition({appId: 'cli-universal-demo'}),
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        ContactComponent,
        HomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}
