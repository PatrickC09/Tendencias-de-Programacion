import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayComponent } from './play/play.component';
import { PlayListComponent } from './play-list/play-list.component';

const routes: Routes = [
  {
    path: 'play',
    component: PlayComponent
  },
  {
    path: 'play-list',
    component: PlayListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
