import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicHomeComponent } from './music-home/music-home.component';

const routes: Routes = [
  {
    path : ':songId',
    component : MusicHomeComponent
  },
  {
    path: '',
    component : MusicHomeComponent
  },
  {
    path: '**',
    component : MusicHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
