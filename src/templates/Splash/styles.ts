import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    height: 200%;
    background-color: ${theme.colors.pokedex.primary};
    overflow: hidden;
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

export const Display = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.pokedex.screenOff};
    border-radius: 0.8rem;
    border: min(5vh, 3.2rem) solid ${theme.colors.pokedex.secondary};
    width: 95%;
    height: 85%;
  `}
`;

export const BottomDetail = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.pokedex.secondary};
    width: 100%;
    height: min(5vh, 3.2rem);
    position: absolute;
    bottom: 0;
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
