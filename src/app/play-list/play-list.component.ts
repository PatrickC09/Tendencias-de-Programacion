import { Component } from '@angular/core';
import { PlaysService } from '../plays.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})
export class PlayListComponent {
  plays: any[] = [];
  selectedPlay: any = null

  constructor(private playSevice: PlaysService, private router: Router) {
    this.plays = this.playSevice.plays
  }

  createPlay() {
    this.playSevice.selectedPlay = null;
    this.router.navigate(['play']);
  }

  editPlay(play: any) {
    this.playSevice.selectedPlay = play
    this.router.navigate(['play']);
  }

  deletePlay(id:number){
    this.playSevice.deleteGame(id);
    console.log(this.playSevice.plays);
  }
}
