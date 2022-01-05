import { renderWithTheme } from '@/utils/testUtils';
import { MockedProvider } from '@apollo/client/testing';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from '.';
import { AllPokemonNamesMock } from './mocks';

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

describe('<SearchForm />', () => {
  it('should render the form', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <SearchForm />
      </MockedProvider>
    );
    expect(
      screen.getByRole('heading', {
        name: /search/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('combobox', {
        name: /search input/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /search/i,
      })
    ).toBeInTheDocument();
  });

  it('should show an error message if Pokémon does not exist', async () => {
    renderWithTheme(
      <MockedProvider mocks={[AllPokemonNamesMock]} addTypename={false}>
        <SearchForm />
      </MockedProvider>
    );
    userEvent.type(
      screen.getByRole('combobox', {
        name: /search input/i,
      }),
      'Invalid-pokémon'
    );
    userEvent.click(
      screen.getByRole('button', {
        name: /search/i,
      })
    );
    expect(
      await screen.findByText(/please, select a valid pokémon/i)
    ).toBeInTheDocument();
  });

  it('should show an error message if user searches with no pokémon', () => {
    renderWithTheme(
      <MockedProvider mocks={[AllPokemonNamesMock]} addTypename={false}>
        <SearchForm />
      </MockedProvider>
    );
    userEvent.click(
      screen.getByRole('button', {
        name: /search/i,
      })
    );
    expect(
      screen.getByText(/please, select a valid pokémon/i)
    ).toBeInTheDocument();
  });

  // TODO: verificar teste
  it('should call push to the selected pokémon page', () => {
    renderWithTheme(
      <MockedProvider mocks={[AllPokemonNamesMock]} addTypename={false}>
        <SearchForm />
      </MockedProvider>
    );
    userEvent.type(
      screen.getByRole('combobox', {
        name: /search input/i,
      }),
      'Bulbasaur'
    );
    userEvent.click(
      screen.getByRole('button', {
        name: /search/i,
      })
    );
    waitFor(() => {
      expect(push).toHaveBeenCalledWith('/pokemon/1');
    });
  });
});
