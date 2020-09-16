import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trainer } from './trainer';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  baseUrl = "http://localhost:8080/PokeSpringORMaster";
  pokeApi = "https://pokeapi.co/api/v2";

  constructor(private http: HttpClient) { }

  getAllTrainers() {
    return this.http.get(`${this.baseUrl}/trainer`);
  }

  getTrainer(id: number) {
    return this.http.get(`${this.baseUrl}/trainer/${id}`);
  }

  addTrainer(t: Trainer): Observable<Trainer[]> {
    return this.http.post(`${this.baseUrl}/trainer`, t) as Observable<Trainer[]>;
  }

  getPoke(id: number): Observable<any> {
    return this.http.get(`${this.pokeApi}/pokemon/${id}`);
  }

  addPoke(p: Pokemon): Observable<Trainer[]> {
    return this.http.post(`${this.baseUrl}/pokemon`, p) as Observable<Trainer[]>;
  }
}
