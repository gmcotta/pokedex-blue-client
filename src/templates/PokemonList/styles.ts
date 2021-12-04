import styled, { css, keyframes } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => {
    console.log('theme', theme);
    return css`
      width: 100%;
      height: 100%;
      background-color: ${theme.colors.pokedex.screenOn};
    `;
  }}
`;

const rotateReact = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`;
const MINUTE_IN_SECONDS = 60;
const animationDurationInMinutes = (minutes: number) =>
  `${minutes * MINUTE_IN_SECONDS}s`;

export const ReactIllustrationContainer = styled.div`
  width: 80vh;
  max-width: 60rem;
  height: 80vh;
  max-height: 60rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotateReact} ${animationDurationInMinutes(5)} infinite;
`;

export const ReactIllustrationEllipses = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 33%;
    border: 1.6rem solid ${theme.colors.react};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::before {
      content: '';
      box-sizing: content-box;
      width: 100%;
      height: 100%;
      border: 1.6rem solid ${theme.colors.react};
      border-radius: 50%;
      position: absolute;
      transform: rotateZ(60deg);
    }

    &::after {
      content: '';
      box-sizing: content-box;
      width: 100%;
      height: 100%;
      border: 1.6rem solid ${theme.colors.react};
      border-radius: 50%;
      position: absolute;
      transform: rotateZ(120deg);
    }
  `}
`;

export const ReactIllustrationCore = styled.div`
  ${({ theme }) => css`
    width: 8rem;
    height: 8rem;
    background-color: ${theme.colors.react};
    border-radius: 50%;
    position: absolute;
  `}
`;
