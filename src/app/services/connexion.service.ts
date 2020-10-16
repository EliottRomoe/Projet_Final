import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { nbaPlayers } from '../../app/models/nbaPlayers';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  private baseUrl : string = "http://localhost:3000";
  data: any;

  constructor(private http:HttpClient) {}

  getnbaPlayers(): Observable<nbaPlayers[]>{
    return this.http.get<nbaPlayers[]>(this.baseUrl + '/api/nbaPlayers')
  }
}