import { useState, useEffect } from 'react';

import PokemonGridItem from 'components/PokemonGridItem';
import { PokemonGridItemProps } from 'components/PokemonGridItem/models';
import formatPokemonName from 'utils/formatPokemonName';

import * as S from './styles';

type PokemonListPageProps = {
  pokemonList: PokemonGridItemProps[];
};

const PokemonListTemplate = ({ pokemonList }: PokemonListPageProps) => {
  const [pokemonName, setPokemonName] = useState('');
  const [allPokemon, setAllPokemon] = useState<PokemonGridItemProps[]>([]);

  useEffect(() => {
    setAllPokemon(pokemonList);
  }, [pokemonList]);

  const handleMouseEnter = (id: number, name: string) => {
    setPokemonName(formatPokemonName(id, name));
  };
  const handleMouseLeave = () => {
    setPokemonName('');
  };

  return (
    <>
      <S.Header>
        <div>
          <button>Filter</button>
          <input defaultValue={pokemonName} />
          <button>Settings</button>
        </div>
      </S.Header>
      <S.Container>
        <S.ListContainer>
          <S.Grid>
            {allPokemon.map((p) => (
              <PokemonGridItem
                key={p.pokemonId}
                pokemonId={p.pokemonId}
                name={p.name}
                imgSrc={p.imgSrc}
                pokemonTypes={p.pokemonTypes}
                onMouseEnter={() => handleMouseEnter(p.pokemonId, p.name)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </S.Grid>
        </S.ListContainer>
        <S.ReactIllustrationContainer>
          <S.ReactIllustrationEllipses>
            <S.ReactIllustrationCore />
          </S.ReactIllustrationEllipses>
        </S.ReactIllustrationContainer>
      </S.Container>
    </>
  );
};

export default PokemonListTemplate;
