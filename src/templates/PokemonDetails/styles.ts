import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 6.4rem;
    background-color: ${theme.colors.gray};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 10;

    & > div {
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
      padding: 2.4rem 0;
      overflow-x: hidden;
      overflow-y: hidden;
      background-color: ${theme.colors.pokedex.screenOn};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
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
    align-self: center;
  `}
`;

export const InfoCard = styled.div`
  ${() => css``}
`;
