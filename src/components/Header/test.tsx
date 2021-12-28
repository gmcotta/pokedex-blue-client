import { screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/testUtils';

import Header from '.';

describe('<Header />', () => {
  it('should render the component', () => {
    renderWithTheme(<Header>Header</Header>);
    screen.logTestingPlaygroundURL();
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
