import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { GalleriaModule } from 'primeng/galleria';
//Components

import { MenuBarComponent } from './components/MenuBar/MenuBar.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    GalleriaModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
