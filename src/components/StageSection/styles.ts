import styled, { css } from 'styled-components';

export const StageContainer = styled.div`
  ${({ theme }) => css`
    h2 {
      color: ${theme.colors.black};
      font-weight: 300;
      font-size: 2.8rem;
    }
  `}
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 0.8rem;
  overflow-y: auto;
`;

export const StageGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-gap: 0.4rem;
  grid-auto-rows: 12rem;
  padding: 0.8rem;
  width: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-track {
    background-color: none;
    margin-bottom: 2.4rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.4rem;
    background-color: white;
  }
`;
