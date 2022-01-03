import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { PokemonTypes } from 'models';

type WrapperProps = {
  pokemonTypes: [PokemonTypes, PokemonTypes?];
};

export const Wrapper = styled.li<WrapperProps>`
  ${({ pokemonTypes, theme }) => {
    const firstPokemonTypeColor = pokemonTypes[0]
      ? rgba(theme.colors.type[pokemonTypes[0]], 0.3)
      : 'none';
    const secondPokemonTypeColor =
      pokemonTypes[1] && rgba(theme.colors.type[pokemonTypes[1]], 0.3);
    const backgroundStyle = secondPokemonTypeColor
      ? `
      linear-gradient(
        45deg,
        ${firstPokemonTypeColor} 0%,
        ${secondPokemonTypeColor} 100%
      );
    `
      : `
        ${firstPokemonTypeColor}
    `;

    return css`
      height: 100%;
      aspect-ratio: 1;
      border-radius: 4rem;
      justify-self: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      > span {
        font-size: 1.2rem;
      }

      & img {
        height: 100%;
        z-index: 10;
        border-radius: 4rem;

        &:hover,
        &:focus {
          background: ${backgroundStyle};
          border: 4px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
            inset 0px 4px 4px rgba(255, 255, 255, 0.25);

          z-index: 5;
          cursor: pointer;
        }
      }
    `;
  }}
`;
