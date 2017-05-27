import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { AppService } from './services/app.service';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule.withServerTransition({appId: 'test-angular-cli-universal'}),
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        ContactComponent,
        HomeComponent,
        BlogComponent
    ],
    providers: [AppService],
    bootstrap: [AppComponent]
})

export class AppModule {}
