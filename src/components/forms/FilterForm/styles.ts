import { darken } from 'polished';
import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  ${({ theme }) => css`
    margin-top: 1.6rem;
    overflow-y: auto;
    > h3 {
      font-size: 2.4rem;
    }

    > div {
      > h4 {
        font-size: 2rem;
      }
      > span {
        font-size: 1.4rem;
      }
    }

    > button {
      width: 100%;
      margin-top: 1.6rem;
      border: none;
      background-color: ${theme.colors.black};
      padding: 0.8rem;
      height: 4rem;
      font-size: 1.6rem;
      color: ${theme.colors.white};
      border-radius: 0.8rem;

      &:hover {
        color: ${darken(0.1, theme.colors.white)};
      }
    }
  `}
`;

export const CheckboxGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 0.8rem;
`;
