import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from '../../utils/testUtils';

import PokemonGridItem from '.';
import pokemonMock from './mock';
import formatPokemonName from '../../utils/formatPokemonName';

const pokemonWithOneType = pokemonMock[3];
const pokemonWithTwoTypes = pokemonMock[0];

describe('<PokemonGridItem />', () => {
  it('should render the component with pokemon with one type', () => {
    const { pokemonId, imgSrc, name, pokemonTypes } = pokemonWithOneType;
    renderWithTheme(
      <PokemonGridItem
        pokemonId={pokemonId}
        imgSrc={imgSrc}
        name={name}
        pokemonTypes={pokemonTypes}
      />
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(
      screen.getByRole('img', {
        name: formatPokemonName(pokemonId, name),
      })
    ).toBeInTheDocument();
  });

  it('should appear background color when user hover the component', async () => {
    const { pokemonId, imgSrc, name, pokemonTypes } = pokemonWithOneType;
    renderWithTheme(
      <PokemonGridItem
        pokemonId={pokemonId}
        imgSrc={imgSrc}
        name={name}
        pokemonTypes={pokemonTypes}
      />
    );
    userEvent.hover(screen.getByRole('button'));
    waitFor(() => {
      expect(screen.getByRole('button')).toHaveStyle({
        background: 'rgba(239,128,48,0.3)',
      });
    });
  });

  it('should render the component with pokemon with two types', () => {
    const { pokemonId, imgSrc, name, pokemonTypes } = pokemonWithTwoTypes;
    renderWithTheme(
      <PokemonGridItem
        pokemonId={pokemonId}
        imgSrc={imgSrc}
        name={name}
        pokemonTypes={pokemonTypes}
      />
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(
      screen.getByRole('img', {
        name: formatPokemonName(pokemonId, name),
      })
    ).toBeInTheDocument();
  });

  it('should appear gradient when user hover the component', async () => {
    const { pokemonId, imgSrc, name, pokemonTypes } = pokemonWithTwoTypes;
    renderWithTheme(
      <PokemonGridItem
        pokemonId={pokemonId}
        imgSrc={imgSrc}
        name={name}
        pokemonTypes={pokemonTypes}
      />
    );
    userEvent.hover(screen.getByRole('button'));
    waitFor(() => {
      expect(screen.getByRole('button')).toHaveStyle({
        background:
          'linear-gradient(45deg, rgba(120,200,79,0.3) 0%, rgba(160,64,159,0.3) 100%)',
      });
    });
  });
});