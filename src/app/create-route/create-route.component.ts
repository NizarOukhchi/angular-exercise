import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-create-route',
  templateUrl: './create-route.component.html',
  styleUrls: ['./create-route.component.css'],
})
export class CreateRouteComponent {
  pokemonForm: FormGroup;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private pokemonService: PokemonService,
    private router: Router
  ) {
    this.pokemonForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
        [this.validateName.bind(this)],
      ],
      attack: [
        0,
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
      defense: [
        0,
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
      hasEvolution: [false],
      description: ['', Validators.required],
    });
  }

  submit() {
    this.isLoading = true;
    this.pokemonService
      .createPokemon(this.pokemonForm.value)
      .subscribe((pokemon: Pokemon) => {
        this.isLoading = false;
        this.pokemonForm.reset();
        this.router.navigate(['/details', pokemon.id]);
      });
  }

  getControl(controlName: string) {
    return this.pokemonForm.get(controlName);
  }

  canSubmit(): boolean {
    return this.pokemonForm.dirty && this.pokemonForm.valid;
  }

  validateName(
    control: AbstractControl
  ): Observable<{ nameExists: boolean } | null> {
    return this.pokemonService.getPokemonByName(control.value).pipe(
      map((pokemons: Pokemon[]) => {
        if (pokemons.length > 0) {
          return { nameExists: true };
        }
        return null;
      })
    );
  }
}
