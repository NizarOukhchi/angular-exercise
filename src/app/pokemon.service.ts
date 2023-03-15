import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon.model';

const API_URL = 'http://localhost:3000/pokemons';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(API_URL);
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.put<Pokemon>(`${API_URL}/${pokemon.id}`, pokemon);
  }

  deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.delete<Pokemon>(`${API_URL}/${pokemon.id}`);
  }

  search(name: string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${API_URL}?q=${name}`);
  }
}
