import { PokemonTypes } from '@/models';
import styled, { css } from 'styled-components';

type WrapperProps = {
  bgColor: PokemonTypes;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, bgColor }) => css`
    background-color: ${theme.colors.type[bgColor]};
    padding: 0.4rem;
    height: 3.2rem;
    border-radius: 1.6rem;
    margin-left: 0.8rem;

    img {
      @media (max-width: 768px) {
        width: 1.8rem;
      }
    }

    > span {
      font-size: 1.6rem;
      color: ${theme.colors.white};
      text-transform: capitalize;
      margin: 0 0.4rem;
    }
  `}
`;
