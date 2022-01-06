import { ReactNode, MouseEvent, HTMLProps } from 'react';

import LockScroll from '../LockScroll';
import * as S from './styles';

type ModalProps = HTMLProps<HTMLDivElement> & {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
  onClose: () => void;
};

const Modal = ({ isOpen, className, children, onClose }: ModalProps) => {
  const checkClickIsInSafeArea = (event: MouseEvent<HTMLElement>) => {
    const safeArea = (event.target as Element).closest(
      '[data-modal-safe-area="true"]'
    );
    if (!safeArea) {
      onClose();
    }
  };
  return (
    <S.Overlay
      aria-label="modal-overlay"
      onClick={(event) => checkClickIsInSafeArea(event)}
      className={className}
      isOpen={isOpen}
    >
      {isOpen && <LockScroll />}
      {children}
    </S.Overlay>
  );
};

export default Modal;
