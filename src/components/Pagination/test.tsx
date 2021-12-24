import { render, screen } from '@testing-library/react';

import Pagination from '.';

describe('<Pagination />', () => {
  it('Should render the component with the previous page button disabled', () => {
    const actualPage = 1;
    render(
      <Pagination
        actualPage={actualPage}
        lastPage={10}
        handleNextPage={() => null}
        handlePrevPage={() => null}
      />
    );
    const previousButton = screen.getByRole('button', {
      name: /previous page/i,
    });
    const nextButton = screen.getByRole('button', { name: /next page/i });
    const input = screen.getByLabelText(/actual page/i);

    expect(previousButton).toBeInTheDocument();
    expect(previousButton).toHaveAttribute('disabled');
    expect(nextButton).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('value', String(actualPage));
  });

  it('Should render the component with the next page button disabled', () => {
    const actualPage = 10;
    render(
      <Pagination
        actualPage={actualPage}
        lastPage={10}
        handleNextPage={() => null}
        handlePrevPage={() => null}
      />
    );
    const previousButton = screen.getByRole('button', {
      name: /previous page/i,
    });
    const nextButton = screen.getByRole('button', { name: /next page/i });
    const input = screen.getByLabelText(/actual page/i);

    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toHaveAttribute('disabled');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('value', String(actualPage));
  });
});
