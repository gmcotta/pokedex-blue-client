import styled, { css } from 'styled-components';

import HeaderComponent from '@/components/Header';
import FooterComponent from '@/components/Footer';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled(HeaderComponent)`
  div {
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Footer = styled(FooterComponent)`
  div {
    width: 100%;
    max-width: 100rem;
    padding: 0 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Container = styled.section`
  ${({ theme }) => {
    return css`
      width: 100%;
      height: 100%;
      padding: 2.4rem;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: ${theme.colors.pokedex.screenOn};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    `;
  }}
`;

export const PokemonName = styled.h1`
  ${({ theme }) => css`
    font-size: 4rem;
    color: ${theme.colors.white};
    background-color: rgba(196, 196, 196, 0.5);
    border: 4px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      inset 0px 4px 4px rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(1rem);
    height: 6.4rem;
    border-radius: 3.2rem;
    padding: 0.8rem;
    line-height: 4.8rem;
  `}
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 2.4rem;
  grid-gap: 2.4rem;
  width: 100%;
  height: 100%;
  max-width: 100rem;
`;

export const ImageCard = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    width: 100%;
    aspect-ratio: 1;
    border: 1.6rem solid orange;
    border-radius: 1.6rem;
    align-self: start;
  `}
`;

export const InfoCard = styled.div`
  ${({ theme }) => css`
    background-color: #d1d1c0;
    align-items: center;
    padding: 2.4rem;
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    max-height: 54rem;

    h2 {
      text-align: center;
      font-size: 3.2rem;
      font-weight: 400;
    }

    > div {
      margin-top: 2.4rem;
      width: 100%;

      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        p {
          font-size: 2.8rem;
        }
      }
    }

    > p {
      background-color: ${theme.colors.white};
      padding: 2.4rem;
      font-size: 2rem;
      border-radius: 0.8rem;
      margin-top: 2.4rem;
      flex: 1;
    }
  `}
`;

export const StatusCard = styled.div`
  ${() => css`
    background-color: #d1d1c0;
    align-items: center;
    padding: 2.4rem;
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 54rem;
  `}
`;

type EvolutionGridProps = {
  numberOfStages: number;
};

export const EvolutionGrid = styled.div<EvolutionGridProps>`
  ${({ numberOfStages }) => css`
    display: grid;
    grid-template-columns: repeat(${numberOfStages}, 1fr);
    margin-top: 2.4rem;
    padding-top: 2.4rem;
    grid-gap: 2.4rem;
    width: 100%;
    height: 100%;
    max-width: 100rem;
    max-height: 54rem;
    justify-items: center;
    background-color: rgba(196, 196, 196, 0.5);
    border: 4px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      inset 0px 4px 4px rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(1rem);
    border-radius: 3.2rem;
  `}
`;

export const StageContainer = styled.div`
  ${({ theme }) => css`
    h2 {
      color: ${theme.colors.black};
      font-weight: 300;
      font-size: 2.8rem;
    }
  `}
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 0.8rem;
  overflow-y: auto;
`;

export const StageGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-gap: 0.4rem;
  grid-auto-rows: 12rem;
  padding: 0.8rem;
  width: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-track {
    background-color: none;
    margin-bottom: 2.4rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.4rem;
    background-color: white;
  }
`;
