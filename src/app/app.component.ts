import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { data } from '../data';
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  pokemons: Pokemon[] = data;
  value = 0;

  ngOnInit(): void {
    console.log('component ready');
  }

  ngOnDestroy(): void {
    console.log('component destroyed');
  }

  capture(pokemon: Pokemon) {
    this.pokemons = this.pokemons.map((p) => {
      if (p.id === pokemon.id) {
        return { ...p, captured: !p.captured };
      }
      return p;
    });
    console.log(`${pokemon.name} captured!`);
  }

  changeValue(event: any) {
    this.pokemons = this.pokemons.map((p) => {
      if (p.id === event.id) {
        return { ...p, [event.key]: event.value };
      }
      return p;
    });
  }
}
