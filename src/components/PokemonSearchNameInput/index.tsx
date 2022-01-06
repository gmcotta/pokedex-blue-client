import { GetAllPokemonNames_pokemons_data_attributes } from '@/graphql/generated/GetAllPokemonNames';
import { useAllPokemonNames } from '@/hooks/useAllPokemonNamesQuery';
import { HTMLProps, useEffect, useState } from 'react';

type PokemonSearchNameInputProps = HTMLProps<HTMLInputElement>;

const PokemonSearchNameInput = (props: PokemonSearchNameInputProps) => {
  const [names, setNames] = useState<
    (GetAllPokemonNames_pokemons_data_attributes | null)[]
  >([]);
  const { data } = useAllPokemonNames({});
  useEffect(() => {
    if (data) {
      const names = data.pokemons!.data.map((pokemon) => {
        return pokemon.attributes;
      });
      setNames(names);
    }
  }, [data]);
  return (
    <>
      <input
        type="search"
        name="pokemon-name"
        list="pokemon-names"
        aria-label="search input"
        onChange={props.onChange}
        onSelect={props.onSelect}
      />
      <datalist id="pokemon-names" aria-label="pokemon name list">
        {names &&
          names.map((value) => (
            <option
              key={value?.pokemonId}
              value={value?.name}
              label={value?.name}
              data-pokemon-id={value?.pokemonId}
              data-testid={value?.name}
            />
          ))}
      </datalist>
    </>
  );
};

export default PokemonSearchNameInput;
