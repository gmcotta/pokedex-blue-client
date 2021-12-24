import { screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { renderWithTheme } from '@/utils/testUtils';

import PokemonListTemplate from '.';
import { PokemonListMockPageOne, PokemonListMockPageTwo } from './mocks';
import userEvent from '@testing-library/user-event';

describe('<PokemonListTemplate />', () => {
  it('should render loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <PokemonListTemplate />
      </MockedProvider>
    );
    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument;
    expect(screen.getByRole('button', { name: /settings/i })).toBeInTheDocument;
    expect(screen.getByLabelText(/pokemon name/i)).toBeInTheDocument;
    expect(screen.getByLabelText(/pokemon name/i)).toHaveAttribute('readOnly');
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it('should render the pokemon list when data is loaded', async () => {
    renderWithTheme(
      <MockedProvider mocks={[PokemonListMockPageOne]} addTypename={false}>
        <PokemonListTemplate />
      </MockedProvider>
    );
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    expect(
      await screen.findByRole('img', { name: /#001 - bulbasaur/i })
    ).toBeInTheDocument();
  });

  it('should appear pokemon name when hover the pokemon image', async () => {
    renderWithTheme(
      <MockedProvider mocks={[PokemonListMockPageOne]} addTypename={false}>
        <PokemonListTemplate />
      </MockedProvider>
    );
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    userEvent.hover(
      await screen.findByRole('img', { name: /#001 - bulbasaur/i })
    );
    expect(
      await screen.findByRole('textbox', { name: /pokemon name/i })
    ).toHaveAttribute('value', '#001 - Bulbasaur');
    userEvent.unhover(
      await screen.findByRole('img', { name: /#001 - bulbasaur/i })
    );
    expect(
      await screen.findByRole('textbox', { name: /pokemon name/i })
    ).toHaveAttribute('value', '');
  });

  it('should go to next page and previous page', async () => {
    renderWithTheme(
      <MockedProvider
        mocks={[PokemonListMockPageOne, PokemonListMockPageTwo]}
        addTypename={false}
      >
        <PokemonListTemplate />
      </MockedProvider>
    );
    expect(
      await screen.findByRole('img', { name: /#001 - bulbasaur/i })
    ).toBeInTheDocument();

    userEvent.click(await screen.findByRole('button', { name: /next page/i }));
    expect(
      await screen.findByRole('img', { name: /#025 - pikachu/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('textbox', { name: /actual page/i })
    ).toHaveAttribute('value', '2');

    userEvent.click(screen.getByRole('button', { name: /previous page/i }));
    expect(
      screen.getByRole('img', { name: /#001 - bulbasaur/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /actual page/i })
    ).toHaveAttribute('value', '1');
  });
});
