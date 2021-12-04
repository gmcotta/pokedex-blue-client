import * as S from './styles';
import PokemonGridItem from 'components/PokemonGridItem';
import pokemonItem from 'components/PokemonGridItem/mock';

const PokemonListTemplate = () => {
  const pokemon = [pokemonItem];
  return (
    <>
      <S.Header>
        <div>
          <button>Filter</button>
          <input />
          <button>Settings</button>
        </div>
      </S.Header>
      <S.Container>
        <S.ListContainer>
          <S.Grid>
            {pokemon.map((p, index) => (
              <PokemonGridItem
                key={index}
                id={p.id}
                name={p.name}
                imgSrc={p.imgSrc}
                pokemonTypes={p.pokemonTypes}
              />
            ))}
          </S.Grid>
          <div>Scrollbar</div>
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
