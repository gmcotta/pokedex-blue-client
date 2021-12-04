import * as S from './styles';

const PokemonListTemplate = () => {
  const pokemon = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
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
            {pokemon.map((p) => (
              <S.Item key={p}>{p}</S.Item>
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
