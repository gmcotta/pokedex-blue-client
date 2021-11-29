import Pokeball from 'components/Pokedex/Pokeball';
import * as S from './styles';

const SplashTemplate = () => {
  return (
    <S.Wrapper>
      <S.LowerScreen>
        <Pokeball />
        {/* <S.PokeballDecoration>
        </S.PokeballDecoration> */}
      </S.LowerScreen>
      <S.UpperScreen />
    </S.Wrapper>
  );
};

export default SplashTemplate;
