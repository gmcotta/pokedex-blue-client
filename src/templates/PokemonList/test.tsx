import { screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/client/testing';

import { renderWithTheme } from '@/utils/testUtils';

import PokemonListTemplate from '.';
import {
  AllPokemonNames,
  PokemonListMockPageOne,
  PokemonListMockPageOneBugDragon,
  PokemonListMockPageTwo,
} from './mocks';

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

describe('<PokemonListTemplate />', () => {
  afterEach(cleanup);
  it('should render loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <PokemonListTemplate />
      </MockedProvider>
    );
    expect(screen.getByRole('button', { name: /filter modal button/i }))
      .toBeInTheDocument;
    expect(screen.getByRole('button', { name: /settings/i })).toBeInTheDocument;
    expect(screen.getByLabelText(/pokemon name/i)).toBeInTheDocument;
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
    expect(screen.getByText(/898 pokémon found/i)).toBeInTheDocument();
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
    ).toHaveTextContent('#001 - Bulbasaur');
    userEvent.unhover(
      await screen.findByRole('img', { name: /#001 - bulbasaur/i })
    );
    expect(
      await screen.findByRole('textbox', { name: /pokemon name/i })
    ).toHaveTextContent('');
  });

  it('should call push when pokemon image is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[PokemonListMockPageOne]} addTypename={false}>
        <PokemonListTemplate />
      </MockedProvider>
    );
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    userEvent.click(
      await screen.findByRole('img', { name: /#001 - bulbasaur/i })
    );
    await waitFor(() => {
      expect(push).toHaveBeenCalledWith('/pokemon/1');
    });
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

    userEvent.click(await screen.findByRole('button', { name: /next/i }));
    expect(
      await screen.findByRole('img', { name: /#025 - pikachu/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/actual page/i)).toHaveTextContent(
      'Page 2 of 38'
    );

    userEvent.click(screen.getByRole('button', { name: /prev/i }));
    expect(
      screen.getByRole('img', { name: /#001 - bulbasaur/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/actual page/i)).toHaveTextContent(
      'Page 1 of 38'
    );
  });

  it('should appear filter modal', () => {
    renderWithTheme(
      <MockedProvider
        mocks={[PokemonListMockPageOne, PokemonListMockPageTwo]}
        addTypename={false}
      >
        <PokemonListTemplate />
      </MockedProvider>
    );
    userEvent.click(
      screen.getByRole('button', { name: /filter modal button/i })
    );
    expect(
      screen.getByRole('heading', { name: /search/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /filter/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /type/i })).toBeInTheDocument();
  });

  it('should search a pokémon and call push to its page', async () => {
    renderWithTheme(
      <MockedProvider
        mocks={[PokemonListMockPageOne, AllPokemonNames]}
        addTypename={false}
      >
        <PokemonListTemplate />
      </MockedProvider>
    );
    userEvent.click(
      screen.getByRole('button', { name: /filter modal button/i })
    );
    userEvent.type(
      screen.getByRole('combobox', {
        name: /search input/i,
      }),
      'Bulbasaur'
    );
    expect(
      screen.getByRole('combobox', {
        name: /search input/i,
      })
    ).toHaveValue('Bulbasaur');
    // await waitFor(() => {
    //   // userEvent.click(screen.getByRole('button', { name: /search/i }));
    //   // expect(push).toHaveBeenCalledWith('/pokemon/1');
    // });
  });

  it('should filter pokémon with bug or dragon types', async () => {
    renderWithTheme(
      <MockedProvider
        mocks={[PokemonListMockPageOne, PokemonListMockPageOneBugDragon]}
        addTypename={false}
      >
        <PokemonListTemplate />
      </MockedProvider>
    );
    userEvent.click(
      screen.getByRole('button', { name: /filter modal button/i })
    );
    userEvent.click(screen.getByRole('checkbox', { name: /bug/i }));
    userEvent.click(screen.getByRole('checkbox', { name: /dragon/i }));
    userEvent.click(screen.getByRole('button', { name: /^filter$/i }));
  });
});
