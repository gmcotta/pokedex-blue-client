import * as S from './styles';

const PokemonListTemplate = () => {
  return (
    <S.Container>
      <header>
        <button>Filter</button>
        <input />
        <button>Settings</button>
      </header>
      <section>
        <ul>
          <li>Bulbasaur</li>
          <li>Ivysaur</li>
          <li>Venusaur</li>
        </ul>
        <div>Scrollbar</div>
      </section>
      <S.ReactIllustrationContainer>
        <S.ReactIllustrationEllipses>
          <S.ReactIllustrationCore />
        </S.ReactIllustrationEllipses>
      </S.ReactIllustrationContainer>
    </S.Container>
  );
};

export default PokemonListTemplate;
