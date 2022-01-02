import { renderWithTheme } from '@/utils/testUtils';
import { screen } from '@testing-library/react';

import Pagination from '.';

describe('<Pagination />', () => {
  it('Should render the component with the previous page button disabled', () => {
    const actualPage = 1;
    renderWithTheme(
      <Pagination
        actualPage={actualPage}
        lastPage={10}
        handleNextPage={() => null}
        handlePrevPage={() => null}
      />
    );
    const previousButton = screen.getByRole('button', {
      name: /prev/i,
    });
    const nextButton = screen.getByRole('button', { name: /next/i });
    const input = screen.getByLabelText(/actual page/i);

    expect(previousButton).toBeInTheDocument();
    expect(previousButton).toHaveAttribute('disabled');
    expect(nextButton).toBeInTheDocument();
    expect(input).toHaveTextContent(/page 1 of 10/i);
  });

  it('Should render the component with the next page button disabled', () => {
    const actualPage = 10;
    renderWithTheme(
      <Pagination
        actualPage={actualPage}
        lastPage={10}
        handleNextPage={() => null}
        handlePrevPage={() => null}
      />
    );
    const previousButton = screen.getByRole('button', {
      name: /prev/i,
    });
    const nextButton = screen.getByRole('button', { name: /next/i });
    const input = screen.getByLabelText(/actual page/i);

    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toHaveAttribute('disabled');
    expect(input).toBeInTheDocument();
    expect(input).toHaveTextContent(/page 10 of 10/i);
  });
});
