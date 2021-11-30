import { useState } from 'react';
import Pokeball from 'components/Pokedex/Pokeball';
import * as S from './styles';

const SplashTemplate = () => {
  const [isAnimationTriggered, setIsAnimationTriggered] = useState(false);

  const handleStartAnimation = () => {
    setIsAnimationTriggered(true);
  };

  return (
    <S.Container>
      <S.Device animationTriggered={isAnimationTriggered}>
        <S.UpperScreen>
          <S.Display animationTriggered={isAnimationTriggered} />
          <S.BottomDetail animationTriggered={isAnimationTriggered} />
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
          <S.Button onClick={handleStartAnimation}>Começar</S.Button>
        </S.LowerScreen>
      </S.Device>
    </S.Container>
  );
};

export default SplashTemplate;
