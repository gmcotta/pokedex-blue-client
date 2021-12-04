import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from '../../utils/testUtils';

import PokemonGridItem from '.';
import pokemonMock from './mock';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const push = jest.fn();
const prefetch = jest.fn(() => Promise.resolve(true));
useRouter.mockImplementation(() => ({
  push,
  prefetch,
  query: '',
  asPath: '',
  route: '/',
}));

const pokemonWithOneType = pokemonMock[3];
const pokemonWithTwoTypes = pokemonMock[0];

describe('<PokemonGridItem />', () => {
  it('should render the component with pokemon with one type', () => {
    const { id, imgSrc, name, pokemonTypes } = pokemonWithOneType;
    renderWithTheme(
      <PokemonGridItem
        id={id}
        imgSrc={imgSrc}
        name={name}
        pokemonTypes={pokemonTypes}
      />
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(
      screen.getByRole('img', {
        name: `#${id.toString().padStart(3, '0')}-${name}`,
      })
    ).toBeInTheDocument();
  });

  it('should appear background color when user hover the component', async () => {
    const { id, imgSrc, name, pokemonTypes } = pokemonWithOneType;
    renderWithTheme(
      <PokemonGridItem
        id={id}
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
    const { id, imgSrc, name, pokemonTypes } = pokemonWithTwoTypes;
    renderWithTheme(
      <PokemonGridItem
        id={id}
        imgSrc={imgSrc}
        name={name}
        pokemonTypes={pokemonTypes}
      />
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(
      screen.getByRole('img', {
        name: `#${id.toString().padStart(3, '0')}-${name}`,
      })
    ).toBeInTheDocument();
  });

  it('should appear gradient when user hover the component', async () => {
    const { id, imgSrc, name, pokemonTypes } = pokemonWithTwoTypes;
    renderWithTheme(
      <PokemonGridItem
        id={id}
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
  it('should redirect to pokémon info page', async () => {
    const { id, imgSrc, name, pokemonTypes } = pokemonWithTwoTypes;
    renderWithTheme(
      <PokemonGridItem
        id={id}
        imgSrc={imgSrc}
        name={name}
        pokemonTypes={pokemonTypes}
      />
    );
    userEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(push).toHaveBeenCalledWith(`/pokemon/${id}`);
    });
  });
});
