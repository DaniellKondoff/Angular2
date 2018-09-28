import { Component, OnInit } from '@angular/core';
import { Game } from '../domain/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  games : Array<Game>
  isShown: boolean = false;
  userName: string = "My Name";
  constructor() { 
    this.games = [{id:1, title:"FirstGame", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqjIMI4DXakUgs46rwVhhjMFggytM8ivj5euEzFB1kiPauG6J"}, {id:2, title:"SecondsGame", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqjIMI4DXakUgs46rwVhhjMFggytM8ivj5euEzFB1kiPauG6J"}]
  }

  ngOnInit() {
  }

  showContacts(){
    this.isShown = !this.isShown;
  }

  showName(name){
    this.userName = name;
    console.log(this.userName)
  }
}
