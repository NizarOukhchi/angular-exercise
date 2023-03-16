import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-details-route',
  templateUrl: './details-route.component.html',
  styleUrls: ['./details-route.component.css'],
})
export class DetailsRouteComponent implements OnInit {
  pokemon?: Pokemon;

  constructor(
    private pokemonService: PokemonService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(switchMap((params) => this.pokemonService.getById(params['id'])))
      .subscribe({
        next: (pokemon) => (this.pokemon = pokemon),
        error: () => {
          this.router.navigate(['/not-found']);
        },
      });
  }
}
