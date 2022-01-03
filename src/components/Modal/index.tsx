import { ReactNode, MouseEvent } from 'react';

import LockScroll from '../LockScroll';
import * as S from './styles';

type ModalProps = {
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
      onClick={(evt) => checkClickIsInSafeArea(evt)}
      className={className}
      isOpen={isOpen}
    >
      {isOpen && <LockScroll />}
      {children}
    </S.Overlay>
  );
};

export default Modal;
