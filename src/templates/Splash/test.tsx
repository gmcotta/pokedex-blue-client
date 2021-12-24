import { screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react-hooks';

import { renderWithTheme } from '@/utils/testUtils';

import Splash from '.';

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

describe('<Splash />', () => {
  it('should render the component', () => {
    const { container } = renderWithTheme(<Splash />);
    expect(screen.getByAltText(/pokémon - título/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /pokédex - react version/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /iniciar/i,
      })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should redirect to Pokémon List page', async () => {
    renderWithTheme(<Splash />);
    act(() => {
      userEvent.click(
        screen.getByRole('button', {
          name: /iniciar/i,
        })
      );
    });
    fireEvent.animationEnd(screen.getByRole('figure'));
    await waitFor(() => {
      expect(push).toHaveBeenCalledWith('/pokemon-list');
    });
  });
});
