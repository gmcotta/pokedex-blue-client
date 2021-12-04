import styled, { css, keyframes } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => {
    console.log('theme', theme);
    return css`
      width: 100%;
      height: 100%;
      background-color: ${theme.colors.pokedex.screenOn};
      display: flex;
      align-items: center;
      justify-content: center;
    `;
  }}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    width: 100%;
    height: 6.4rem;
    background-color: ${theme.colors.gray};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    & > div {
      width: 80%;
      max-width: 100rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
  `}
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
  width: 80%;
  max-width: 60rem;
  height: 80%;
  max-height: 60rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* animation: ${rotateReact} ${animationDurationInMinutes(3)} infinite; */
`;

export const ReactIllustrationEllipses = styled.div`
  ${({ theme }) => css`
    width: 100%;
    aspect-ratio: 3;
    border: min(2vh, 1.6rem) solid ${theme.colors.react};
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
      border: min(2vh, 1.6rem) solid ${theme.colors.react};
      border-radius: 50%;
      position: absolute;
      transform: rotateZ(60deg);
    }

    &::after {
      content: '';
      box-sizing: content-box;
      width: 100%;
      height: 100%;
      border: min(2vh, 1.6rem) solid ${theme.colors.react};
      border-radius: 50%;
      position: absolute;
      transform: rotateZ(120deg);
    }
  `}
`;

export const ReactIllustrationCore = styled.div`
  ${({ theme }) => css`
    height: 80%;
    aspect-ratio: 1;
    background-color: ${theme.colors.react};
    border-radius: 50%;
    position: absolute;
  `}
`;
