interface Type {
  name: string;
  image: string;
}

export interface Pokemon {
  id: number;
  name: string;
  attack: number;
  defense: number;
  types: Type[];
  image: string;
  hasEvolution: boolean;
  lastSeen: string;
  description?: string;
  captured?: boolean;
}
