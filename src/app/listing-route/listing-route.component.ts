import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-listing-route',
  templateUrl: './listing-route.component.html',
  styleUrls: ['./listing-route.component.css'],
})
export class ListingRouteComponent implements OnInit, OnDestroy {
  pokemons: Pokemon[] = [];
  isDeleteLoading: any[] = [];
  searchQuery = '';
  searchQuerySubject = new Subject<string>();

  constructor(private pokemonService: PokemonService) {
    this.searchQuerySubject
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((query: string) => {
        this.search(query);
      });
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons;
      this.isDeleteLoading = pokemons.map((p) => ({
        id: p.id,
        isLoading: false,
      }));
    });
  }

  ngOnDestroy(): void {
    console.log('component destroyed');
  }

  capture(pokemon: Pokemon) {
    this.pokemonService
      .updatePokemon({ ...pokemon, captured: !pokemon.captured })
      .subscribe((updatedPokemon) => {
        this.pokemons = this.pokemons.map((p) => {
          if (p.id === updatedPokemon.id) {
            return updatedPokemon;
          }
          return p;
        });
      });
  }

  changeValue(event: any) {
    const { value, key, pokemon } = event;
    this.pokemonService
      .updatePokemon({ ...pokemon, [key]: value })
      .subscribe((updatedPokemon) => {
        this.pokemons = this.pokemons.map((p) => {
          if (p.id === updatedPokemon.id) {
            return updatedPokemon;
          }
          return p;
        });
      });
  }

  delete(pokemon: Pokemon) {
    this.setIsLoading(pokemon, true);
    this.pokemonService.deletePokemon(pokemon).subscribe(() => {
      this.pokemons = this.pokemons.filter((p) => p.id !== pokemon.id);
      this.setIsLoading(pokemon, false);
    });
  }

  getIsDeleteLoading(pokemon: Pokemon) {
    return this.isDeleteLoading.find((p) => p.id === pokemon.id)?.isLoading;
  }

  search(query: string) {
    this.pokemonService.search(query).subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }

  onQuery(event: any) {
    this.searchQuerySubject.next(event.target.value);
  }

  private setIsLoading(pokemon: Pokemon, isLoading: boolean) {
    this.isDeleteLoading = this.isDeleteLoading.map((p) => {
      if (p.id === pokemon.id) {
        return { ...p, isLoading };
      }
      return p;
    });
  }
}
