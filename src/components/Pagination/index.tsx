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
      <S.PrevButton disabled={actualPage === 1} onClick={handlePrevPage}>
        Prev
      </S.PrevButton>
      <S.CurrentPage aria-label="actual page">{`Page ${actualPage} of ${lastPage}`}</S.CurrentPage>
      <S.NextButton disabled={actualPage === lastPage} onClick={handleNextPage}>
        Next
      </S.NextButton>
    </S.Wrapper>
  );
};

export default Pagination;
