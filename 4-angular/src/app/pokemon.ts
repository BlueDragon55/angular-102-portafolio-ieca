export interface Pokemon {
    name: string,
    url: string,
    edad?: number, // puede ser opcional gracias a ?
    sprites: Sprites
  }
  
  export interface Sprites{
    front_default: string;
  }
  