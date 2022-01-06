import { renderWithTheme } from '@/utils/testUtils';
import { MockedProvider } from '@apollo/client/testing';
import { screen } from '@testing-library/react';
import PokemonSearchNameInput from '.';
import { AllPokemonNamesMock } from '../forms/SearchForm/mocks';

describe('<PokemonSearchNameInput', () => {
  it('should render the component', async () => {
    renderWithTheme(
      <MockedProvider mocks={[AllPokemonNamesMock]} addTypename={false}>
        <PokemonSearchNameInput />
      </MockedProvider>
    );
    expect(await screen.findByTestId(/bulbasaur/i)).toBeInTheDocument();
  });
});
