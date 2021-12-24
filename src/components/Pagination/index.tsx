import * as S from './styles';

type PaginationProps = {
  actualPage: number;
  lastPage: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
};

const Pagination = ({
  actualPage,
  lastPage,
  handlePrevPage,
  handleNextPage,
}: PaginationProps) => {
  return (
    <S.Wrapper>
      <button disabled={actualPage === 1} onClick={handlePrevPage}>
        Previous page
      </button>
      <input aria-label="actual page" readOnly value={actualPage} />
      <button disabled={actualPage === lastPage} onClick={handleNextPage}>
        Next page
      </button>
    </S.Wrapper>
  );
};

export default Pagination;
