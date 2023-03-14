import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent {
  @Input() pokemon?: Pokemon;
  @Output() capture = new EventEmitter<Pokemon>();
  @Output() changeValue = new EventEmitter<any>();

  onCapture() {
    this.capture.emit(this.pokemon);
  }

  onNameChange(name: any) {
    this.changeValue.emit({ value: name, key: 'name', id: this.pokemon?.id });
  }

  onAttackChange(value: any) {
    this.changeValue.emit({ value, key: 'attack', id: this.pokemon?.id });
  }

  onDefenseChange(value: any) {
    this.changeValue.emit({ value, key: 'defense', id: this.pokemon?.id });
  }
}
