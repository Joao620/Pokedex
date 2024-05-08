  export interface IPokemon {
  id: number;
  name: string;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: IAbility[];
  forms: IForms[];
  sprites: ISprite;
}

interface IAbility {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    url: string;
  };
}

interface IForms {
  name: string;
  url: string;
}

interface ISprite {
  front_default: string;
}
