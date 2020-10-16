import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../services/connexion.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})

export class ApiComponent implements OnInit {
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