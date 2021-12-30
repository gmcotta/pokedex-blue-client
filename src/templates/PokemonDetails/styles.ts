import styled, { css } from 'styled-components';
import { darken } from 'polished';

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
    letter-spacing: 0.4rem;
    font-family: 'Odibee Sans', sans-serif;
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

    @media (max-width: 768px) {
      font-size: 2.8rem;
    }
  `}
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 2.4rem;
  grid-gap: 2.4rem;
  width: 100%;

  max-width: 100rem;

  @media (max-width: 768px) {
    grid-template-columns: none;
  }
`;

export const ImageCard = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    width: 100%;
    aspect-ratio: 1;
    border: 1.6rem solid orange;
    border-radius: 1.6rem;
    align-self: start;
    justify-self: center;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      max-height: 40rem;
    }
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

      @media (max-width: 768px) {
        font-size: 2.4rem;
      }
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
          @media (max-width: 768px) {
            font-size: 2rem;
          }
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

      @media (max-width: 768px) {
        font-size: 1.6rem;
      }
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

    @media (max-width: 768px) {
      grid-template-columns: none;
      grid-template-rows: repeat(${numberOfStages}, 1fr);
      max-height: 100rem;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    padding: 0.8rem 1.6rem;
    border: none;
    height: 3.2rem;
    border-radius: 1.6rem;
    background-color: ${theme.colors.white};
    line-height: 1.6rem;
    transition: all 0.3s ease-in-out;

    &:not([disabled]):hover {
      cursor: pointer;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        inset 0px 4px 4px rgba(255, 255, 255, 0.25);
      transform: translateY(-0.2rem);
    }

    &:disabled {
      cursor: not-allowed;
      background-color: ${darken(0.1, theme.colors.white)};
    }
  `}
`;
