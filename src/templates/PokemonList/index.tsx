import PokemonGridItem from 'components/PokemonGridItem';
import pokemonMock from 'components/PokemonGridItem/mock';
import * as S from './styles';
import { useState } from 'react';
import formatPokemonName from 'utils/formatPokemonName';

const PokemonListTemplate = () => {
  const [pokemonName, setPokemonName] = useState('');
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
            {pokemonMock.map((p, index) => (
              <PokemonGridItem
                key={index}
                pokemonId={p.pokemonId}
                name={p.name}
                imgSrc={p.imgSrc}
                pokemonTypes={p.pokemonTypes}
                onMouseEnter={() => handleMouseEnter(p.pokemonId, p.name)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </S.Grid>
          <div>S</div>
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
