import { screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/testUtils';

import Modal from '.';
import userEvent from '@testing-library/user-event';

const onClose = jest.fn();

describe('<Modal />', () => {
  it('should render the component with closed status', () => {
    renderWithTheme(
      <Modal isOpen={false} onClose={onClose}>
        <div data-modal-safe-area="true">Safe Area</div>
      </Modal>
    );
    expect(screen.getByText(/safe area/i)).toBeInTheDocument();
    expect(
      screen.getByRole('region', {
        name: /modal-overlay/i,
      })
    ).toHaveStyle({
      opacity: 0,
      'pointer-events': 'none',
    });
  });

  it('should render the component with open status', () => {
    renderWithTheme(
      <Modal isOpen={true} onClose={onClose}>
        <div data-modal-safe-area="true">Safe Area</div>
      </Modal>
    );
    expect(screen.getByText(/safe area/i)).toBeInTheDocument();
    expect(
      screen.getByRole('region', {
        name: /modal-overlay/i,
      })
    ).toHaveStyle({
      opacity: 1,
      'pointer-events': 'all',
    });
  });

  it('should call onClose when click on overlay', () => {
    renderWithTheme(
      <Modal isOpen={true} onClose={onClose}>
        <div data-modal-safe-area="true">Safe Area</div>
      </Modal>
    );
    screen.logTestingPlaygroundURL();
    userEvent.click(
      screen.getByRole('region', {
        name: /modal-overlay/i,
      })
    );
    expect(onClose).toHaveBeenCalled();
  });
});
