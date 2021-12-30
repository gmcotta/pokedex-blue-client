import { darken } from 'polished';
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: none;
    padding: 0.8rem;
    height: 4rem;
    font-size: 1.6rem;
    text-transform: uppercase;

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: 1.2rem;
    }

    &:not([disabled]):hover {
      cursor: pointer;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: ${darken(0.1, theme.colors.white)};
    }
  `}
`;

export const PrevButton = styled(Button)`
  border-radius: 0.8rem 0 0 0.8rem;
`;

export const NextButton = styled(Button)`
  border-radius: 0 0.8rem 0.8rem 0;
`;

export const CurrentPage = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: 0.8rem;
    height: 4rem;
    font-size: 1.6rem;
    border-left: 1px solid ${theme.colors.gray};
    border-right: 1px solid ${theme.colors.gray};

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: 1.2rem;
      line-height: 2.4rem;
    }
  `}
`;
