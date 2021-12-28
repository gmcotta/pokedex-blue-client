import styled, { css, keyframes } from 'styled-components';

import HeaderComponent from '@/components/Header';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled(HeaderComponent)`
  div {
    width: 80%;
    max-width: 100rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  ${() => css`
    div {
      width: 80%;
      max-width: 100rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
  `}
`;

export const Container = styled.section`
  ${({ theme }) => {
    return css`
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      overflow-y: hidden;
      background-color: ${theme.colors.pokedex.screenOn};
      display: flex;
      align-items: center;
      justify-content: center;
    `;
  }}
`;

export const ListContainer = styled.section`
  ${() => css`
    position: absolute;
    top: calc(6.4rem + 4rem);
    width: 80%;
    max-width: 100rem;
    height: calc(90% - 6.4rem);
    z-index: 10;
    margin: 0 auto;
    padding: 1.6rem;
    background-color: rgba(196, 196, 196, 0.5);
    border: 4px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      inset 0px 4px 4px rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(1rem);
    border-radius: 6.4rem;
    display: flex;
    flex-direction: column;
    max-height: 70rem;
  `}
`;

export const Grid = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  padding: 1.2rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 0.4rem;
  grid-auto-columns: minmax(15rem, 1fr);
  grid-auto-rows: 15rem;
  justify-items: center;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-track {
    background-color: none;
    margin: 2.4rem 0;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.4rem;
    background-color: white;
  }
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
  height: 80vh;
  width: 80vh;

  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotateReact} ${animationDurationInMinutes(3)} infinite;
`;

export const ReactIllustrationEllipses = styled.div`
  ${({ theme }) => css`
    width: 100%;
    aspect-ratio: 3;
    border: 1.2rem solid ${theme.colors.react};
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
      border: 1.2rem solid ${theme.colors.react};
      border-radius: 50%;
      position: absolute;
      transform: rotateZ(60deg);
    }

    &::after {
      content: '';
      box-sizing: content-box;
      width: 100%;
      height: 100%;
      border: 1.2rem solid ${theme.colors.react};
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

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
