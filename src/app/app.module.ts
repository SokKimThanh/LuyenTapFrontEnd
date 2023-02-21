import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GenericComponent } from './generic/generic.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GalleryModule } from './gallery/gallery.module';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselHolderComponent } from './carousel-holder/carousel-holder.component';
import { OwlModule } from 'ngx-owl-carousel';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './characters/character.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    GenericComponent,
    WelcomeComponent,
    CarouselHolderComponent,
    CharactersComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'generic', component: GenericComponent },
      { path: 'carousel', component: CarouselHolderComponent },
      { path: 'character', component: CharactersComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    GalleryModule,
    OwlModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
