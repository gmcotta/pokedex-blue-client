import { screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react-hooks';

import { renderWithTheme } from '@/utils/testUtils';

import PokemonDetailsTemplate from '.';
import { firstPokemonMock, lastPokemonMock } from './mocks';

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

jest.mock('@/components/StatusBar', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="StatusBar mock"></div>;
    },
  };
});

jest.mock('@/components/StageSection', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="StageSection mock"></div>;
    },
  };
});

describe('<PokemonDetailsTemplate />', () => {
  afterEach(cleanup);
  it('should render the component with info tab active', () => {
    renderWithTheme(<PokemonDetailsTemplate details={firstPokemonMock} />);
    expect(
      screen.getByRole('button', {
        name: /info/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /status/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /evolution/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /#001 - bulbasaur/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', {
        name: /1 - official image/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /seed pokémon/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/type/i)).toBeInTheDocument();
    expect(
      screen.getByRole('img', {
        name: /grass-logo/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', {
        name: /poison-logo/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/0\.7 m/i)).toBeInTheDocument();
    expect(screen.getByText(/6\.9 kg/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /a strange seed was planted on its back at birth\. the plant sprouts and grows with this pokémon\./i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /previous pokémon/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /next pokémon/i,
      })
    ).toBeInTheDocument();
  });

  it('should show the status tab', async () => {
    renderWithTheme(<PokemonDetailsTemplate details={firstPokemonMock} />);
    userEvent.click(
      screen.getByRole('button', {
        name: /status/i,
      })
    );
    await waitFor(() =>
      expect(screen.getAllByTestId(/statusbar mock/i)).toHaveLength(6)
    );
  });

  it('should show the evolution tab', async () => {
    renderWithTheme(<PokemonDetailsTemplate details={firstPokemonMock} />);
    userEvent.click(
      screen.getByRole('button', {
        name: /evolution/i,
      })
    );
    await waitFor(() => {
      expect(screen.getAllByTestId(/stagesection mock/i)).toHaveLength(3);
    });
  });

  it('should show again the info tab', async () => {
    renderWithTheme(<PokemonDetailsTemplate details={firstPokemonMock} />);
    userEvent.click(
      screen.getByRole('button', {
        name: /evolution/i,
      })
    );
    userEvent.click(
      screen.getByRole('button', {
        name: /info/i,
      })
    );
    await waitFor(() => {
      expect(
        screen.getByRole('heading', {
          name: /seed pokémon/i,
        })
      ).toBeInTheDocument();
    });
  });

  it('should call push to next pokemon', async () => {
    renderWithTheme(<PokemonDetailsTemplate details={firstPokemonMock} />);
    act(() => {
      userEvent.click(
        screen.getByRole('button', {
          name: /next pokémon/i,
        })
      );
    });
    await waitFor(() => {
      expect(push).toHaveBeenCalled();
    });
  });

  it('should call push to previous pokemon', async () => {
    renderWithTheme(<PokemonDetailsTemplate details={lastPokemonMock} />);
    act(() => {
      userEvent.click(
        screen.getByRole('button', {
          name: /previous pokémon/i,
        })
      );
    });
    await waitFor(() => {
      expect(push).toHaveBeenCalled();
    });
  });
});
