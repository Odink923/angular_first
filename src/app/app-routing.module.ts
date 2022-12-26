import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MusicComponent} from './component/music/music.component'
import {MusicItemComponent} from './component/music/music-item/music-item.component'
const routes: Routes = [
  {path: 'music', component: MusicComponent},
  {path: 'music/item', component: MusicItemComponent},
  {path: 'music/item/:id', component: MusicItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
