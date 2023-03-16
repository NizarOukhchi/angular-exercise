import { Pokemon } from './pokemon.model';

export type PokemonFormData = Omit<
  Pokemon,
  'id' | 'image' | 'lastSeen' | 'types' | 'captured'
>;
