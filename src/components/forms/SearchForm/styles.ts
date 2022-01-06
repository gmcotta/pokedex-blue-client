import { darken } from 'polished';
import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  ${({ theme }) => css`
    margin-bottom: 1.6rem;
    > h3 {
      font-size: 2.4rem;
    }
    > div {
      display: flex;
      align-items: center;
      margin-top: 0.8rem;
      > button {
        margin-left: 1.6rem;
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
    }
    > span {
      color: ${theme.colors.red};
      display: block;
      font-size: 1.4rem;
    }
  `}
`;
