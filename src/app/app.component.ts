import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from './services/connexion.service';
import { nbaPlayers } from '../app/models/nbaPlayers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public allnbaPlayers : any;
  title = 'projetfinal';

  constructor(private apiservice:ConnexionService, private router:Router){
 
  
  }

  ngOnInit(): void {
    this.apiservice.getnbaPlayers().subscribe(
      (data) => this.allnbaPlayers = data
    )
  }

}