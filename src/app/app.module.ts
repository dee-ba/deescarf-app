import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { IntroComponent } from './MyComponents/intro/intro.component';
import { GalleryComponent } from './MyComponents/gallery/gallery.component';
import { InfoComponent } from './MyComponents/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    GalleryComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
