import { screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { renderWithTheme } from '@/utils/testUtils';

import PokemonListTemplate from '.';
import { MockedProviderMock } from './mocks';

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
      <MockedProvider mocks={MockedProviderMock} addTypename={false}>
        <PokemonListTemplate />
      </MockedProvider>
    );
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    expect(
      await screen.findByRole('img', { name: /#001 - bulbasaur/i })
    ).toBeInTheDocument();
  });
});
