import { useState } from 'react';
import { useRouter } from 'next/router';

import * as S from './styles';

const SplashTemplate = () => {
  const [isAnimationTriggered, setIsAnimationTriggered] = useState(false);
  const { push } = useRouter();

  const handleStartAnimation = () => {
    setIsAnimationTriggered(true);
  };

  const handleEndAnimation = () => {
    push('/pokemon-list');
  };

  return (
    <S.Container>
      <S.Overlay animationTriggered={isAnimationTriggered}>
        <>
          <S.TitleLogo
            src="/images/pokemon-title-logo.png"
            alt="Pokémon - título"
          />
          <S.Subtitle>Pokédex - React Version</S.Subtitle>
        </>
        <S.Button onClick={handleStartAnimation}>Start</S.Button>
      </S.Overlay>
      <S.Device animationTriggered={isAnimationTriggered}>
        <S.UpperScreen>
          <S.Display
            role="figure"
            onAnimationEnd={handleEndAnimation}
            animationTriggered={isAnimationTriggered}
          />
          <S.BottomDetail animationTriggered={isAnimationTriggered} />
        </S.UpperScreen>
        <S.LowerScreen>
          <S.PokeballDecoration>
            <S.OutterBall>
              <S.InnerBall />
            </S.OutterBall>
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
      </S.Device>
    </S.Container>
  );
};

export default SplashTemplate;
