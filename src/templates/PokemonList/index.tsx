import * as S from './styles';
import PokemonGridItem from 'components/PokemonGridItem';
import pokemonMock from 'components/PokemonGridItem/mock';

const PokemonListTemplate = () => {
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
            {pokemonMock.map((p, index) => (
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
