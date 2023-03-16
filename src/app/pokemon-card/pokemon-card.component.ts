import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent {
  @Input() pokemon?: Pokemon;
  @Input() isDeleteLoading = false;

  @Output() capture = new EventEmitter<Pokemon>();
  @Output() changeValue = new EventEmitter<any>();
  @Output() delete = new EventEmitter<Pokemon>();

  onCapture() {
    this.capture.emit(this.pokemon);
  }

  onNameChange(name: any) {
    this.changeValue.emit({ value: name, key: 'name', pokemon: this.pokemon });
  }

  onAttackChange(value: any) {
    this.changeValue.emit({ value, key: 'attack', pokemon: this.pokemon });
  }

  onDefenseChange(value: any) {
    this.changeValue.emit({ value, key: 'defense', pokemon: this.pokemon });
  }

  onDelete() {
    this.delete.emit(this.pokemon);
  }
}
