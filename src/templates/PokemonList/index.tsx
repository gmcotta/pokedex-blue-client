import * as S from './styles';

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
          <ul>
            <li>Bulbasaur</li>
            <li>Ivysaur</li>
            <li>Venusaur</li>
          </ul>
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
