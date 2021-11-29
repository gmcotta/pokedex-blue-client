import styled, { css } from 'styled-components';

export const OutterBall = styled.div`
  ${({ theme }) => css`
    width: 40rem;
    height: 40rem;
    background-color: ${theme.colors.pokedex.secondary};
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.6rem;

    &::after {
      content: ' ';
      width: 40rem;
      height: 3.2rem;
      background-color: ${theme.colors.pokedex.primary};
      position: absolute;
    }
  `}
`;

export const InnerBall = styled.div`
  ${({ theme }) => css`
    box-sizing: content-box;
    width: 10rem;
    height: 10rem;
    background-color: ${theme.colors.pokedex.secondary};
    border-radius: 50%;
    border: 3.2rem solid ${theme.colors.pokedex.primary};
    z-index: 2;
  `}
`;
