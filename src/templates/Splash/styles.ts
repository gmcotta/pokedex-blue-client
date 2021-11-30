import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    height: 200%;
    background-color: ${theme.colors.pokedex.primary};
  `}
`;

export const UpperScreen = styled.section`
  ${({ theme }) => css`
    height: 50%;
    background-color: ${theme.colors.pokedex.secondary};
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
    height: clamp(1.6rem, 1vw, 3.2rem);
    width: clamp(4.8rem, 1vw, 9.6rem);
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
    height: clamp(1.6rem, 1vw, 3.2rem);
    width: clamp(1.6rem, 1vw, 3.2rem);
    border-radius: 50%;
    background-color: ${theme.colors.grayLight};
    box-shadow: ${theme.effects.shadow.insideWhite},
      ${theme.effects.shadow.outsideBlack};
  `}
`;

export const BigCircleButton = styled.div`
  ${({ theme }) => css`
    height: clamp(4rem, 1vw, 8rem);
    width: clamp(4rem, 1vw, 8rem);
    border-radius: 50%;
    background-color: ${theme.colors.grayLight};
    box-shadow: ${theme.effects.shadow.insideWhite},
      ${theme.effects.shadow.outsideBlack};
    margin: 2.4rem 0;
  `}
`;

export const DPadWrapper = styled.div`
  ${() => css`
    position: absolute;
    bottom: clamp(2.4rem, 1vw, 4.8rem);
    left: clamp(2.4rem, 1vw, 4.8rem);
    display: grid;
    grid-template-areas: '. top .' 'left center right' '. bottom .';
  `}
`;

export const DPadButton = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.grayLight};
    height: clamp(3.2rem, 1vw, 6.4rem);
    width: clamp(3.2rem, 1vw, 6.4rem);
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
