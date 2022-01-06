import styled, { css } from 'styled-components';

export const Container = styled.label`
  ${() => css`
    display: inline-flex;
    width: fit-content;
    align-items: center;

    &:hover {
      cursor: pointer;
    }

    > span {
      margin-left: 0.8rem;
      font-size: 1.6rem;
    }
  `}
`;
