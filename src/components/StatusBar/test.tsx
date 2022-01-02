import { screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/testUtils';

import StatusBar from '.';

describe('<StatusBar />', () => {
  it('should render the component', () => {
    renderWithTheme(<StatusBar value="45" name="HP" status="hp" />);
    expect(screen.getByText(/hp - 45/i)).toBeInTheDocument;
    expect(screen.getByLabelText(/hp/i)).toHaveStyle({
      'background-color': '#FF0000',
      width: '17.65%',
    });
  });
});
