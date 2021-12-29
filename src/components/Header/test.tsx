import { screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/testUtils';

import Header from '.';

describe('<Header />', () => {
  it('should render the component', () => {
    renderWithTheme(<Header>Header</Header>);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText(/header/i)).toBeInTheDocument();
  });
});
