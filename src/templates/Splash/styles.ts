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
