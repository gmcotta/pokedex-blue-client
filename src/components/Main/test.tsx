import { render, screen } from '@testing-library/react';
import Main from '.';

describe('<Main />', () => {
  it('should render the component', () => {
    const { container } = render(<Main />);
    expect(screen.getByRole('heading', { name: /main/i })).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
    expect(container.firstChild).toMatchSnapshot();
  });
});
