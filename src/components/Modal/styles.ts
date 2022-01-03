import styled, { css } from 'styled-components';

type OverlayProps = {
  isOpen: boolean;
};

export const Overlay = styled.section<OverlayProps>`
  ${({ isOpen }) => css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 100;

    ${!isOpen &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
    ${isOpen &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
  `}
`;
