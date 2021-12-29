import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from '@/utils/testUtils';

import StageSection from '.';
import userEvent from '@testing-library/user-event';

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

describe('<StageSection />', () => {
  it('should render the component', () => {
    renderWithTheme(
      <StageSection
        title="Test"
        stageInfo={[
          {
            pokemonId: 1,
            name: 'Bulbasaur',
            frontImageUrl:
              'http://localhost:1337/uploads/1_front_Image_1703a51298.png',
            pokemonTypes: ['grass', 'poison'],
          },
        ]}
      />
    );
    expect(
      screen.getByRole('heading', {
        name: /test/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', {
        name: /#001 - bulbasaur/i,
      })
    ).toBeInTheDocument();
  });

  it('should call push when image is clicked', async () => {
    renderWithTheme(
      <StageSection
        title="Test"
        stageInfo={[
          {
            pokemonId: 1,
            name: 'Bulbasaur',
            frontImageUrl:
              'http://localhost:1337/uploads/1_front_Image_1703a51298.png',
            pokemonTypes: ['grass', 'poison'],
          },
        ]}
      />
    );
    userEvent.click(screen.getByRole('img', { name: /#001 - bulbasaur/i }));
    await waitFor(() => {
      expect(push).toHaveBeenCalledWith('/pokemon/1');
    });
  });
});
