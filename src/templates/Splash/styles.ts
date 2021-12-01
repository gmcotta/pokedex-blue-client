import styled, { css, keyframes, DefaultTheme } from 'styled-components';

export const Container = styled.main`
  height: 100%;
  position: relative;
  overflow: hidden;
`;

type AnimationProps = {
  animationTriggered: boolean;
};

export const Device = styled.section<AnimationProps>`
  ${({ theme, animationTriggered }) => css`
    width: 100%;
    height: 200%;
    background-color: ${theme.colors.pokedex.primary};
    position: absolute;
    bottom: 0;
    ${animationTriggered &&
    css`
      bottom: -100%;
      transition: bottom 500ms 300ms ease-in-out;
    `}
  `}
`;

export const UpperScreen = styled.section`
  ${({ theme }) => css`
    height: 50%;
    background-color: ${theme.colors.pokedex.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    position: relative;
  `}
`;

const turnOnDisplay = (theme: DefaultTheme) => keyframes`
  from {
    background-color: ${theme.colors.pokedex.screenOff};
    border-radius: 0.8rem;
    border: min(5vh, 3.2rem) solid ${theme.colors.pokedex.secondary};
    width: 95%;
    height: 85%;
  }
  to {
    background-color: ${theme.colors.pokedex.screenOn};
      border: 0;
      border-radius: 0;
      width: 100%;
      height: 100%;
  }
`;

export const Display = styled.div<AnimationProps>`
  ${({ theme, animationTriggered }) => css`
    background-color: ${theme.colors.pokedex.screenOff};
    border-radius: 0.8rem;
    border: min(5vh, 3.2rem) solid ${theme.colors.pokedex.secondary};
    width: 95%;
    height: 85%;
    ${animationTriggered &&
    css`
      animation: ${turnOnDisplay(theme)} 500ms 1000ms ease-in-out;
      animation-fill-mode: forwards;
    `}
  `}
`;

export const BottomDetail = styled.div<AnimationProps>`
  ${({ theme, animationTriggered }) => css`
    background-color: ${theme.colors.pokedex.secondary};
    width: 100%;
    height: min(5vh, 3.2rem);
    position: absolute;
    bottom: 0;
    ${animationTriggered &&
    css`
      opacity: 0;
      transition: opacity 200ms 1000ms linear;
    `}
  `}
`;

export const LowerScreen = styled.section`
  ${({ theme }) => css`
    height: 50%;
    background-color: ${theme.colors.pokedex.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  `}
`;

export const PokeballDecoration = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: min(102vw, 80rem);
    height: min(102vw, 80rem);
    background-color: transparent;
    border-radius: 50%;
    border: min(5vw, 3.2rem) solid ${theme.colors.pokedex.secondary};
    /* margin: 1.6rem; */

    &::after {
      content: '';
      width: min(5vw, 3.2rem);
      height: 120vh;
      background-color: ${theme.colors.pokedex.secondary};
      position: absolute;
    }
  `}
`;

export const OutterBall = styled.div`
  ${({ theme }) => css`
    width: min(80vw, 40rem);
    height: min(80vw, 40rem);
    background-color: ${theme.colors.pokedex.secondary};
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.6rem;

    &::after {
      content: ' ';
      width: min(80vw, 40rem);
      height: min(5vw, 3.2rem);
      background-color: ${theme.colors.pokedex.primary};
      position: absolute;
    }
  `}
`;

export const InnerBall = styled.div`
  ${({ theme }) => css`
    box-sizing: content-box;
    width: min(20vw, 10rem);
    height: min(20vw, 10rem);
    background-color: ${theme.colors.pokedex.secondary};
    border-radius: 50%;
    border: min(5vw, 3.2rem) solid ${theme.colors.pokedex.primary};
    z-index: 2;
  `}
`;

type RectangleButtonProps = {
  position?: 'topLeft' | 'topRight';
};

export const RectangleButton = styled.div<RectangleButtonProps>`
  ${({ theme, position = 'topLeft' }) => css`
    height: min(3vw, 3.2rem);
    width: min(10vw, 9.6rem);
    background-color: ${theme.colors.grayLight};
    box-shadow: ${theme.effects.shadow.insideWhite},
      ${theme.effects.shadow.outsideBlack};
    position: absolute;
    top: clamp(2.4rem, 1vw, 4.8rem);
    ${position === 'topLeft' &&
    css`
      left: clamp(2.4rem, 1vw, 4.8rem);
    `}
    ${position === 'topRight' &&
    css`
      right: clamp(2.4rem, 1vw, 4.8rem);
    `}
  `}
`;

export const RightButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: clamp(2.4rem, 1vw, 4.8rem);
  right: clamp(2.4rem, 1vw, 4.8rem);
  transform: rotateZ(15deg);
`;

export const SmallCircleButton = styled.div`
  ${({ theme }) => css`
    height: min(4vw, 3.6rem);
    width: min(4vw, 3.6rem);
    border-radius: 50%;
    background-color: ${theme.colors.grayLight};
    box-shadow: ${theme.effects.shadow.insideWhite},
      ${theme.effects.shadow.outsideBlack};
  `}
`;

export const BigCircleButton = styled.div`
  ${({ theme }) => css`
    height: min(8vw, 8rem);
    width: min(8vw, 8rem);
    border-radius: 50%;
    background-color: ${theme.colors.grayLight};
    box-shadow: ${theme.effects.shadow.insideWhite},
      ${theme.effects.shadow.outsideBlack};
    margin: min(4vw, 2.4rem) 0;
  `}
`;

export const DPadWrapper = styled.div`
  ${() => css`
    position: absolute;
    left: clamp(2.4rem, 1vw, 4.8rem);
    bottom: clamp(3.6rem, 1vw, 9.6rem);
    display: grid;
    grid-template-areas: '. top .' 'left center right' '. bottom .';
  `}
`;

export const DPadButton = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.grayLight};
    height: min(6vw, 4rem);
    width: min(6vw, 4rem);
    grid-area: center;
  `}
`;

export const DPadLeft = styled(DPadButton)`
  box-shadow: -4px 1px 4px rgba(0, 0, 0, 0.25),
    -4px -4px 4px rgba(0, 0, 0, 0.25);
  grid-area: left;
`;

export const DPadTop = styled(DPadButton)`
  box-shadow: -3px -4px 4px rgba(0, 0, 0, 0.25),
    -4px 0px 4px rgba(0, 0, 0, 0.25);
  grid-area: top;
`;

export const DPadRight = styled(DPadButton)`
  box-shadow: inset -4px -4px 4px #ffffff;
  grid-area: right;
`;

export const DPadBottom = styled(DPadButton)`
  box-shadow: inset -4px -4px 4px #ffffff;
  grid-area: bottom;
`;

export const Overlay = styled.div<AnimationProps>`
  ${({ animationTriggered }) => css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
    ${animationTriggered &&
    css`
      opacity: 0;
      transition: opacity 300ms ease-in-out;
    `}
  `}
`;

export const TitleLogo = styled.img`
  width: 90%;
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xl};
    color: #c4dced;

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.font.sizes.lg};
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.font.sizes.md};
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background: linear-gradient(180deg, #83b8e9 25%, #2390f4 100%);
    font-size: ${theme.font.sizes.sm};
    color: ${theme.colors.grayLight};
    height: 4.8rem;
    padding: 0.8rem 1.6rem;
    border-radius: 0.8rem;
    margin-top: 2.4rem;
    border: 0;
    border-bottom: 4px solid #2d41f0;

    &:hover {
      filter: brightness(0.8);

      cursor: pointer;
      transition: filter 200ms ease-in;
    }

    &:active {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  `}
`;
