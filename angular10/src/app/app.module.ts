import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VitrineComponent } from './components/vitrine/vitrine.component';
import { VitrineService } from './services/vitrine.service';

@NgModule({
  declarations: [
    AppComponent,
    VitrineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [VitrineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
