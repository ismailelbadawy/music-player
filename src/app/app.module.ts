import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicHomeComponent } from './music-home/music-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { SongsRepository } from './repositories/songs.repository';
import { DescriptionCardComponent } from './description-card/description-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicHomeComponent,
    DescriptionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers: [
    SongsRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
