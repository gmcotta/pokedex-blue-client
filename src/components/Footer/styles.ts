import styled, { css } from 'styled-components';

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    height: 6.4rem;
    background-color: ${theme.colors.gray};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  `}
`;
