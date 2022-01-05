import { renderWithTheme } from '@/utils/testUtils';
import { MockedProvider } from '@apollo/client/testing';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterForm from '.';
import { AllPokemonTypes } from './mocks';

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

describe('<FilterForm />', () => {
  it('should render the form', async () => {
    renderWithTheme(
      <MockedProvider mocks={[AllPokemonTypes]} addTypename={false}>
        <FilterForm />
      </MockedProvider>
    );
    expect(
      screen.getByRole('heading', {
        name: /filter/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /type/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/select up to 2 types/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /filter/i,
      })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('checkbox', { name: /bug/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('checkbox', { name: /dark/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('checkbox', { name: /dragon/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('checkbox', { name: /electric/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('checkbox', { name: /fairy/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('checkbox', { name: /fighting/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('checkbox', { name: /fire/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('checkbox', { name: /flying/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('checkbox', { name: /ghost/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('checkbox', { name: /grass/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('checkbox', { name: /ground/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('checkbox', { name: /ice/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('checkbox', { name: /normal/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('checkbox', { name: /poison/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('checkbox', { name: /psychic/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('checkbox', { name: /rock/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('checkbox', { name: /steel/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('checkbox', { name: /water/i })
    ).toBeInTheDocument();
  });

  it('should not allow to select more than 3 types', async () => {
    renderWithTheme(
      <MockedProvider mocks={[AllPokemonTypes]} addTypename={false}>
        <FilterForm />
      </MockedProvider>
    );
    userEvent.click(await screen.findByRole('checkbox', { name: /bug/i }));
    userEvent.click(await screen.findByRole('checkbox', { name: /dark/i }));
    userEvent.click(await screen.findByRole('checkbox', { name: /dragon/i }));

    expect(
      await screen.findAllByRole('checkbox', { checked: true })
    ).toHaveLength(2);
  });

  it('should call push with bug and dark types', async () => {
    renderWithTheme(
      <MockedProvider mocks={[AllPokemonTypes]} addTypename={false}>
        <FilterForm />
      </MockedProvider>
    );
    userEvent.click(await screen.findByRole('checkbox', { name: /bug/i }));
    userEvent.click(await screen.findByRole('checkbox', { name: /dark/i }));
    userEvent.click(
      screen.getByRole('button', {
        name: /filter/i,
      })
    );
    expect(push).toHaveBeenCalledWith('?types=bug,dark');
  });
});
