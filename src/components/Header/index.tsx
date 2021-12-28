import { ReactNode } from 'react';
import * as S from './styles';

type HeaderProps = {
  className?: string;
  children: ReactNode;
};

const Header = ({ className, children }: HeaderProps) => {
  return <S.Wrapper className={className}>{children}</S.Wrapper>;
};

export default Header;
