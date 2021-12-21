import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { PokemonGridItemProps } from 'models';

type WrapperProps = Pick<PokemonGridItemProps, 'pokemonTypes'>;

export const Wrapper = styled.li<WrapperProps>`
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
      height: 100%;
      aspect-ratio: 1;
      border-radius: 6.4rem;

      &:hover,
      &:focus {
        background: ${backgroundStyle};
        border: 4px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
          inset 0px 4px 4px rgba(255, 255, 255, 0.25);

        z-index: 5;
        cursor: pointer;
      }

      & img {
        height: 100%;
        z-index: 10;
        border-radius: 6.4rem;
      }
    `;
  }}
`;

export const ImageWrapper = styled.a``;
