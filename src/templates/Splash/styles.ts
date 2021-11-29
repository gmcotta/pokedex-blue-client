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
  `}
`;

export const PokeballDecoration = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120vh;
    min-width: 120vh;
    background-color: transparent;
    border-radius: 50%;
    border: 3.2rem solid ${theme.colors.pokedex.secondary};

    &::after {
      content: '';
      width: 3.2rem;
      height: 120vh;
      background-color: ${theme.colors.pokedex.secondary};
      position: absolute;
    }
  `}
`;
