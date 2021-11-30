import Pokeball from 'components/Pokedex/Pokeball';
import * as S from './styles';

const SplashTemplate = () => {
  return (
    <S.Wrapper>
      <S.UpperScreen>
        <S.Display />
        <S.BottomDetail />
      </S.UpperScreen>
      <S.LowerScreen>
        <S.PokeballDecoration>
          <Pokeball />
        </S.PokeballDecoration>
        <S.RectangleButton position="topLeft" />
        <S.RectangleButton position="topRight" />
        <S.DPadWrapper>
          <S.DPadButton />
          <S.DPadTop />
          <S.DPadRight />
          <S.DPadBottom />
          <S.DPadLeft />
        </S.DPadWrapper>
        <S.RightButtonsWrapper>
          <S.SmallCircleButton />
          <S.BigCircleButton />
          <S.SmallCircleButton />
        </S.RightButtonsWrapper>
      </S.LowerScreen>
    </S.Wrapper>
  );
};

export default SplashTemplate;
