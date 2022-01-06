import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    height: 4rem;
    border-radius: 0.8rem;
    padding: 0.8rem;
    border: 1px solid ${theme.colors.gray};
    width: 20rem;
    font-size: 1.6rem;
  `}
`;
