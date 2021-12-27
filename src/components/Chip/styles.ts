import { PokemonTypes } from '@/models';
import styled, { css } from 'styled-components';

type WrapperProps = {
  color: string;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, color }) => css`
    background-color: ${theme.colors.type[color as PokemonTypes]};
    padding: 0.4rem;
    height: 3.2rem;
    border-radius: 1.6rem;
    margin-left: 0.8rem;

    > span {
      font-size: 1.6rem;
      color: ${theme.colors.white};
      text-transform: capitalize;
      margin: 0 0.4rem;
    }
  `}
`;
