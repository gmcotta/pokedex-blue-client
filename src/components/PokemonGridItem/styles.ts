import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { PokemonGridItemProps } from './models';

type WrapperProps = Pick<PokemonGridItemProps, 'pokemonTypes'>;

export const Wrapper = styled.div<WrapperProps>`
  ${({ pokemonTypes, theme }) => {
    const firstPokemonType = rgba(theme.colors.type[pokemonTypes[0]], 0.3);
    const secondPokemonType =
      pokemonTypes[1] && rgba(theme.colors.type[pokemonTypes[1]], 0.3);
    const backgroundStyle = secondPokemonType
      ? `
      linear-gradient(
        45deg,
        ${firstPokemonType} 0%,
        ${secondPokemonType} 100%
      );
    `
      : `
        ${firstPokemonType}
    `;

    return css`
      width: 100%;
      aspect-ratio: 1;

      &:hover,
      &:focus {
        background: ${backgroundStyle};
        border: 4px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
          inset 0px 4px 4px rgba(255, 255, 255, 0.25);
        border-radius: 64px;
        z-index: 5;
        cursor: pointer;
      }

      & img {
        width: 100%;
        height: 100%;
        z-index: 10;
      }
    `;
  }}
`;
