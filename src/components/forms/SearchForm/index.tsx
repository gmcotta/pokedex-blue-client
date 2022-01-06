import { FormEvent, SyntheticEvent, useState } from 'react';

import PokemonSearchNameInput from '@/components/PokemonSearchNameInput';

import * as S from './styles';
import { useRouter } from 'next/router';

const SearchForm = () => {
  const { push } = useRouter();
  const [selectedPokemon, setSelectedPokemon] = useState('a');
  const [hasError, setHasError] = useState(false);

  const handleSearchInputChange = (
    event: SyntheticEvent<HTMLInputElement, Event>
  ) => {
    setSelectedPokemon((event.target as HTMLInputElement).value);
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const selectedOption = document.querySelector(
      `option[value=${selectedPokemon}]`
    );
    if (selectedOption) {
      setHasError(false);
      const pokemonId = selectedOption?.getAttribute('data-pokemon-id');
      push(`/pokemon/${pokemonId}`);
    } else {
      setHasError(true);
    }
  };

  return (
    <S.Wrapper onSubmit={(event) => handleSearch(event)}>
      <h3>Search</h3>
      <div>
        <PokemonSearchNameInput
          placeholder="Select..."
          onSelect={(event) => handleSearchInputChange(event)}
        />
        <button type="submit">Search</button>
      </div>
      {hasError && <span>Please, select a valid Pokémon</span>}
    </S.Wrapper>
  );
};

export default SearchForm;
