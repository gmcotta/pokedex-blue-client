import { PokemonStatus } from '@/models';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    p {
      font-size: 2.4rem;
    }

    div {
      width: 100%;
      display: flex;
      background-color: ${theme.colors.white};
      height: 3.2rem;
      border-radius: 0.8rem;
    }
  `}
`;

type BarProps = {
  bgColor: PokemonStatus;
  barWidth: string;
};

export const Bar = styled.span<BarProps>`
  ${({ theme, bgColor, barWidth }) => {
    console.log(bgColor);
    return css`
      background: ${theme.colors.status[bgColor]};
      width: ${barWidth}%;
      height: 100%;
      border-radius: 0.8rem 0 0 0.8rem;
    `;
  }}
`;
