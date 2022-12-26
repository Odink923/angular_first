import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from "@angular/material/table";
import { MusicComponent } from './component/music/music.component';
import {SoundHttpService} from "./api/services/sound-http.service";
import {HttpClientModule} from "@angular/common/http";
import { MusicItemComponent } from './component/music/music-item/music-item.component';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HeaderComponent } from './component/layout/header/header.component';




@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    MusicItemComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatSnackBarModule,

  ],
  providers: [SoundHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
