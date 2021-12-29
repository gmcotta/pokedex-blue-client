import { PokemonInfo } from '@/models/PokemonInfo';

export const firstPokemonMock: PokemonInfo = {
  pokemonId: 1,
  name: 'Bulbasaur',
  genus: 'Seed Pokémon',
  description:
    'A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.',
  weight: 69,
  height: 7,
  officialImageUrl:
    'http://localhost:1337/uploads/1_official_Image_31a6fd6314.png',
  status: {
    hp: '45',
    attack: '49',
    defense: '49',
    speed: '45',
    specialAttack: '65',
    specialDefense: '65',
  },
  pokemonTypes: ['grass', 'poison'],
  evolutionChain: {
    firstStage: [
      {
        pokemonId: 1,
        name: 'Bulbasaur',
        frontImageUrl:
          'http://localhost:1337/uploads/1_front_Image_1703a51298.png',
        pokemonTypes: ['grass', 'poison'],
      },
    ],
    secondStage: [
      {
        pokemonId: 2,
        name: 'Ivysaur',
        frontImageUrl:
          'http://localhost:1337/uploads/2_front_Image_fa40f22a64.png',
        pokemonTypes: ['grass', 'poison'],
      },
    ],
    thirdStage: [
      {
        pokemonId: 3,
        name: 'Venusaur',
        frontImageUrl:
          'http://localhost:1337/uploads/3_front_Image_84acf9b62b.png',
        pokemonTypes: ['grass', 'poison'],
      },
    ],
  },
};

export const lastPokemonMock: PokemonInfo = {
  pokemonId: 898,
  name: 'Calyrex',
  genus: 'King Pokémon',
  description:
    'Calyrex is a merciful Pokémon, capable of providing healing and blessings. It reigned over the Galar region in times of yore.',
  weight: 77,
  height: 11,
  officialImageUrl:
    'http://localhost:1337/uploads/898_official_Image_9ee4b80757.png',
  status: {
    hp: '100',
    attack: '80',
    defense: '80',
    speed: '80',
    specialAttack: '80',
    specialDefense: '80',
  },
  pokemonTypes: ['grass', 'psychic'],
  evolutionChain: {
    firstStage: [
      {
        pokemonId: 898,
        name: 'Calyrex',
        frontImageUrl:
          'http://localhost:1337/uploads/898_front_Image_e7cce50ae4.png',
        pokemonTypes: ['grass', 'psychic'],
      },
    ],
    secondStage: [],
    thirdStage: [],
  },
};
