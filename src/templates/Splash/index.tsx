import Pokeball from 'components/Pokedex/Pokeball';
import * as S from './styles';

const SplashTemplate = () => {
  return (
    <S.Wrapper>
      <S.LowerScreen>
        <S.PokeballDecoration>
          <Pokeball />
        </S.PokeballDecoration>
        {/* <Pokeball /> */}
      </S.LowerScreen>
      <S.UpperScreen />
    </S.Wrapper>
  );
};

export default SplashTemplate;
