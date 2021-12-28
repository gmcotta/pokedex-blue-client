import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/testUtils';

import Chip from '.';
// TODO: Check what is happening with the render
describe('<Chip />', () => {
  it('should render component without image', () => {
    renderWithTheme(<Chip name="bug" />);
  });
  screen.debug();
  screen.logTestingPlaygroundURL();
});

describe('<Chip />', () => {
  it('should render component without image', () => {
    renderWithTheme(<Chip name="bug" hasImage />);
  });
  screen.logTestingPlaygroundURL();
});
