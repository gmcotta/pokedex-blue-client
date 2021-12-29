import { screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/testUtils';

import Footer from '.';

describe('<Footer />', () => {
  it('should render the component', () => {
    renderWithTheme(<Footer>Footer</Footer>);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText(/footer/i)).toBeInTheDocument();
  });
});
